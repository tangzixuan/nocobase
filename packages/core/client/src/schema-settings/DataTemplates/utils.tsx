import { ArrayBase } from '@formily/antd-v5';
import { useField, useForm } from '@formily/react';
import { message } from 'antd';
import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { getAssociationPath } from '../../block-provider/hooks';
import { useCollectionManager } from '../../collection-manager';
import { useCompile } from '../../schema-component';
import { TreeNode } from './TreeLabel';
import { systemKeys } from './hooks/useCollectionState';

export const useSyncFromForm = (fieldSchema, collection?, callBack?) => {
  const { getCollectionJoinField, getCollectionFields } = useCollectionManager();
  const array = ArrayBase.useArray();
  const index = ArrayBase.useIndex();
  const record = ArrayBase.useRecord();
  const compile = useCompile();
  const { t } = useTranslation();
  const from = useForm();

  /**
   * maxDepth: 从 0 开始，0 表示一层，1 表示两层，以此类推
   */
  const traverseFields = (collectionName, { exclude = [], depth = 0, maxDepth, prefix = '' }, formData) => {
    if (depth > maxDepth) {
      return [];
    }
    return getCollectionFields(collectionName)
      .map((field) => {
        if (exclude.includes(field.name)) {
          return;
        }
        if (!field.interface) {
          return;
        }
        if (['sort', 'password', 'sequence'].includes(field.type)) {
          return;
        }
        const node = {
          type: 'duplicate',
          tag: compile(field.uiSchema?.title) || field.name,
        };
        const option = {
          ...node,
          title: React.createElement(TreeNode, node),
          key: prefix ? `${prefix}.${field.name}` : field.name,
          isLeaf: true,
          field,
        };
        const tatgetFormField = formData.find((v) => v.name === field.name);
        // 多对多和多对一只展示关系字段
        if (
          ['belongsTo', 'belongsToMany'].includes(field.type) &&
          (!tatgetFormField || ['Select', 'Picker'].includes(tatgetFormField?.fieldMode))
        ) {
          node['type'] = 'reference';
          option['type'] = 'reference';
          option['title'] = React.createElement(TreeNode, { ...node, type: 'reference' });
          option.isLeaf = false;
          option['children'] = traverseAssociations(field.target, {
            depth: depth + 1,
            maxDepth,
            prefix: option.key,
            exclude: systemKeys,
          });
        } else if (
          ['hasOne', 'hasMany'].includes(field.type) ||
          ['Nester', 'SubTable'].includes(tatgetFormField?.fieldMode)
        ) {
          option.isLeaf = false;
          option['children'] = traverseFields(
            field.target,
            {
              depth: depth + 1,
              maxDepth,
              prefix: option.key,
              exclude: ['id', ...systemKeys],
            },
            formData,
          );
        }
        return option;
      })
      .filter(Boolean);
  };

  const traverseAssociations = (collectionName, { prefix, maxDepth, depth = 0, exclude = [] }) => {
    // if (depth > maxDepth) {
    //   return [];
    // }
    return getCollectionFields(collectionName)
      .map((field) => {
        if (!field.target || !field.interface) {
          return;
        }
        if (exclude.includes(field.name)) {
          return;
        }
        const option = {
          type: 'preloading',
          tag: compile(field.uiSchema?.title) || field.name,
        };
        const value = prefix ? `${prefix}.${field.name}` : field.name;
        return {
          type: 'preloading',
          tag: compile(field.uiSchema?.title) || field.name,
          title: React.createElement(TreeNode, option),
          key: value,
          isLeaf: false,
          field,
          children: traverseAssociations(field.target, {
            prefix: value,
            depth: depth + 1,
            maxDepth,
            exclude,
          }),
        };
      })
      .filter(Boolean);
  };

  const getEnableFieldTree = useCallback((collectionName: string, formData) => {
    if (!collectionName) {
      return [];
    }

    try {
      return traverseFields(collectionName, { exclude: ['id', ...systemKeys], maxDepth: 1 }, formData);
    } catch (error) {
      console.error(error);
      return [];
    }
  }, []);

  return {
    async run() {
      const formData = new Set([]);
      const selectFields = new Set([]);
      const getAssociationAppends = (schema, str) => {
        schema.reduceProperties((pre, s) => {
          const prefix = pre || str;
          const collectionfield = s['x-collection-field'] && getCollectionJoinField(s['x-collection-field']);
          const isAssociationSubfield = s.name.includes('.');
          const isAssociationField =
            collectionfield && ['hasOne', 'hasMany', 'belongsTo', 'belongsToMany'].includes(collectionfield.type);
          const fieldPath = !isAssociationField && isAssociationSubfield ? getAssociationPath(s.name) : s.name;
          const path = prefix === '' || !prefix ? fieldPath : prefix + '.' + fieldPath;
          if (collectionfield) {
            selectFields.add(path);
          }
          if (collectionfield && (isAssociationField || isAssociationSubfield) && s['x-component'] !== 'TableField') {
            formData.add({ name: path, fieldMode: s['x-component-props']['mode'] || 'Select' });
            if (['Nester', 'SubTable'].includes(s['x-component-props']?.mode)) {
              const bufPrefix = prefix && prefix !== '' ? prefix + '.' + s.name : s.name;
              getAssociationAppends(s, bufPrefix);
            }
          } else if (
            ![
              'ActionBar',
              'Action',
              'Action.Link',
              'Action.Modal',
              'Selector',
              'Viewer',
              'AddNewer',
              'AssociationField.Selector',
              'AssociationField.AddNewer',
              'TableField',
            ].includes(s['x-component'])
          ) {
            getAssociationAppends(s, str);
          }
        }, str);
      };
      getAssociationAppends(fieldSchema, '');
      const treeData = getEnableFieldTree(record?.collection || collection, [...formData]);
      if (callBack) {
        callBack(treeData, [...selectFields], from);
      } else {
        array?.field.form.query(`fieldReaction.items.${index}.layout.fields`).take((f: any) => {
          f.componentProps.treeData = [];
          setTimeout(() => (f.componentProps.treeData = treeData));
        });
        array?.field.value.splice(index, 1, {
          ...array?.field?.value[index],
          fields: [...selectFields],
          treeData: treeData,
        });
      }
      message.success(t('Sync successfully'));
    },
  };
};
