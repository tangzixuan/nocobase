/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

// copy 自移动端插件
// TODO： 需要在移动端插件中动态注册到这里
export default {
  name: 'mobileRoutes',
  dumpRules: 'required',
  migrationRules: ['overwrite', 'schema-only'],
  inherit: false,
  hidden: false,
  description: null,
  fields: [
    {
      key: 'ymgf0jxu1kg',
      name: 'parentId',
      type: 'bigInt',
      interface: 'integer',
      description: null,
      collectionName: 'mobileRoutes',
      parentKey: null,
      reverseKey: null,
      isForeignKey: true,
      uiSchema: {
        type: 'number',
        title: '{{t("Parent ID")}}',
        'x-component': 'InputNumber',
        'x-read-pretty': true,
      },
    },
    {
      key: 'b07aqgs2shv',
      name: 'parent',
      type: 'belongsTo',
      interface: 'm2o',
      description: null,
      collectionName: 'mobileRoutes',
      parentKey: null,
      reverseKey: null,
      foreignKey: 'parentId',
      treeParent: true,
      onDelete: 'CASCADE',
      uiSchema: {
        title: '{{t("Parent")}}',
        'x-component': 'AssociationField',
        'x-component-props': {
          multiple: false,
          fieldNames: {
            label: 'id',
            value: 'id',
          },
        },
      },
      target: 'mobileRoutes',
      targetKey: 'id',
    },
    {
      key: 'p8sxllsgin1',
      name: 'children',
      type: 'hasMany',
      interface: 'o2m',
      description: null,
      collectionName: 'mobileRoutes',
      parentKey: null,
      reverseKey: null,
      foreignKey: 'parentId',
      treeChildren: true,
      onDelete: 'CASCADE',
      uiSchema: {
        title: '{{t("Children")}}',
        'x-component': 'AssociationField',
        'x-component-props': {
          multiple: true,
          fieldNames: {
            label: 'id',
            value: 'id',
          },
        },
      },
      target: 'mobileRoutes',
      targetKey: 'id',
      sourceKey: 'id',
    },
    {
      key: '7y601o9bmih',
      name: 'id',
      type: 'bigInt',
      interface: 'integer',
      description: null,
      collectionName: 'mobileRoutes',
      parentKey: null,
      reverseKey: null,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      uiSchema: {
        type: 'number',
        title: '{{t("ID")}}',
        'x-component': 'InputNumber',
        'x-read-pretty': true,
      },
    },
    {
      key: 'm8s9b94amz3',
      name: 'createdAt',
      type: 'date',
      interface: 'createdAt',
      description: null,
      collectionName: 'mobileRoutes',
      parentKey: null,
      reverseKey: null,
      field: 'createdAt',
      uiSchema: {
        type: 'datetime',
        title: '{{t("Created at")}}',
        'x-component': 'DatePicker',
        'x-component-props': {},
        'x-read-pretty': true,
      },
    },
    {
      key: 'p3p69woziuu',
      name: 'createdBy',
      type: 'belongsTo',
      interface: 'createdBy',
      description: null,
      collectionName: 'mobileRoutes',
      parentKey: null,
      reverseKey: null,
      target: 'users',
      foreignKey: 'createdById',
      uiSchema: {
        type: 'object',
        title: '{{t("Created by")}}',
        'x-component': 'AssociationField',
        'x-component-props': {
          fieldNames: {
            value: 'id',
            label: 'nickname',
          },
        },
        'x-read-pretty': true,
      },
      targetKey: 'id',
    },
    {
      key: 's0gw1blo4hm',
      name: 'updatedAt',
      type: 'date',
      interface: 'updatedAt',
      description: null,
      collectionName: 'mobileRoutes',
      parentKey: null,
      reverseKey: null,
      field: 'updatedAt',
      uiSchema: {
        type: 'string',
        title: '{{t("Last updated at")}}',
        'x-component': 'DatePicker',
        'x-component-props': {},
        'x-read-pretty': true,
      },
    },
    {
      key: 'd1l988n09gd',
      name: 'updatedBy',
      type: 'belongsTo',
      interface: 'updatedBy',
      description: null,
      collectionName: 'mobileRoutes',
      parentKey: null,
      reverseKey: null,
      target: 'users',
      foreignKey: 'updatedById',
      uiSchema: {
        type: 'object',
        title: '{{t("Last updated by")}}',
        'x-component': 'AssociationField',
        'x-component-props': {
          fieldNames: {
            value: 'id',
            label: 'nickname',
          },
        },
        'x-read-pretty': true,
      },
      targetKey: 'id',
    },
    {
      key: 'bo7btzkbyan',
      name: 'title',
      type: 'string',
      interface: 'input',
      description: null,
      collectionName: 'mobileRoutes',
      parentKey: null,
      reverseKey: null,
      translation: true,
      uiSchema: {
        type: 'string',
        'x-component': 'Input',
        title: '{{t("Title")}}',
      },
    },
    {
      key: 'ozl5d8t2d5e',
      name: 'icon',
      type: 'string',
      interface: 'input',
      description: null,
      collectionName: 'mobileRoutes',
      parentKey: null,
      reverseKey: null,
      uiSchema: {
        type: 'string',
        'x-component': 'Input',
        title: '{{t("Icon")}}',
      },
    },
    {
      key: '6bbyhv00bp4',
      name: 'schemaUid',
      type: 'string',
      interface: 'input',
      description: null,
      collectionName: 'mobileRoutes',
      parentKey: null,
      reverseKey: null,
      uiSchema: {
        type: 'string',
        'x-component': 'Input',
        title: '{{t("Schema UID")}}',
      },
    },
    {
      key: 'm0k5qbaktab',
      name: 'type',
      type: 'string',
      interface: 'input',
      description: null,
      collectionName: 'mobileRoutes',
      parentKey: null,
      reverseKey: null,
      uiSchema: {
        type: 'string',
        'x-component': 'Input',
        title: '{{t("Type")}}',
      },
    },
    {
      key: 'ssuml1j2v1b',
      name: 'options',
      type: 'json',
      interface: 'json',
      description: null,
      collectionName: 'mobileRoutes',
      parentKey: null,
      reverseKey: null,
      defaultValue: null,
      uiSchema: {
        type: 'object',
        'x-component': 'Input.JSON',
        'x-component-props': {
          autoSize: {
            minRows: 5,
          },
        },
        default: null,
        title: '{{t("Options")}}',
      },
    },
    {
      key: 'jjmosjqhz8l',
      name: 'sort',
      type: 'sort',
      interface: 'sort',
      description: null,
      collectionName: 'mobileRoutes',
      parentKey: null,
      reverseKey: null,
      scopeKey: 'parentId',
      uiSchema: {
        type: 'number',
        'x-component': 'InputNumber',
        'x-component-props': {
          stringMode: true,
          step: '1',
        },
        'x-validator': 'integer',
        title: '{{t("Sort")}}',
      },
    },
    {
      type: 'belongsToMany',
      name: 'roles',
      through: 'rolesMobileRoutes',
      target: 'roles',
      onDelete: 'CASCADE',
    },
    {
      type: 'boolean',
      name: 'hideInMenu',
      interface: 'checkbox',
      uiSchema: {
        type: 'boolean',
        'x-component': 'Checkbox',
        title: '{{t("Hide in menu")}}',
      },
    },
    {
      type: 'boolean',
      name: 'enableTabs',
      interface: 'checkbox',
      uiSchema: {
        type: 'boolean',
        'x-component': 'Checkbox',
        title: '{{t("Enable tabs")}}',
      },
    },
    {
      type: 'boolean',
      name: 'hidden',
      interface: 'checkbox',
      uiSchema: {
        type: 'boolean',
        'x-component': 'Checkbox',
        title: '{{t("Hidden")}}',
      },
    },
  ],
  category: [],
  logging: true,
  autoGenId: true,
  createdAt: true,
  createdBy: true,
  updatedAt: true,
  updatedBy: true,
  template: 'tree',
  view: false,
  tree: 'adjacencyList',
  filterTargetKey: 'id',
} as any;
