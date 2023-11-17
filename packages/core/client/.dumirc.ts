import { getUmiConfig } from '@nocobase/devtools/umiConfig';
import { defineConfig } from 'dumi';
import { defineThemeConfig } from 'dumi-theme-nocobase';

const umiConfig = getUmiConfig();

export default defineConfig({
  hash: true,
  alias: {
    ...umiConfig.alias,
  },
  resolve: {
    atomDirs: [
      { type: 'api', dir: 'src' },
      { type: 'api', dir: 'src/schema-component/antd' },
      // { type: 'api', dir: 'src/route-switch/antd' },
    ],
  },
  themeConfig: defineThemeConfig({
    title: 'NocoBase',
    logo: 'https://www.nocobase.com/images/logo.png',
    github: 'https://github.com/nocobase/nocobase',
    footer: 'nocobase | Copyright © 2022',
    // sidebarGroupModePath: ['/components'],
    nav: [
      {
        title: 'API',
        link: '/apis/application',
      },
      {
        title: 'UI Schema',
        link: '/ui-schema',
      },
    ],
    sidebarEnhance: {
      '/apis': [
        {
          title: 'Core',
          type: 'group',
          children: [
            {
              title: 'Application',
              children: [
                {
                  title: 'Application',
                  link: '/apis/application',
                },
                {
                  title: 'APIClient',
                  link: '/apis/api-client',
                },
                {
                  title: 'PluginSettingsManager',
                  link: '#',
                },
              ],
            },
            {
              title: 'UI schema designer',
              children: [
                {
                  title: 'SchemaComponent',
                  link: '/apis/schema-component',
                },
                {
                  title: 'SchemaInitializer',
                  link: '/apis/schema-initializer',
                },
                {
                  title: 'SchemaSettings',
                  link: '/apis/schema-settings',
                },
                {
                  title: 'DNDContext & DragHandler',
                  link: '#',
                },
              ],
            },
            {
              title: 'Collection Manager',
              link: '/apis/collection-manager',
            },
            {
              title: 'BlockProvider',
              link: '#',
            },
            {
              title: 'RecordProvider',
              link: '#',
            },
          ],
        },
        {
          title: 'React components',
          type: 'group',
          children: [
            {
              title: 'Board',
              link: '#',
            },
            {
              title: 'Icon',
              link: '#',
            },
          ],
        },
        {
          title: 'Schema components',
          type: 'group',
          children: [
            {
              title: 'Action',
              link: '/apis/action',
            },
            {
              title: 'Input',
              link: '/apis/input',
            },
          ],
        },
      ],
      '/ui-schema': [
        {
          title: 'Overview',
          link: '/ui-schema',
        },
        {
          title: 'Globals',
          type: 'group',
          children: [
            {
              title: 'Menu',
              link: '/ui-schema/globals/menu',
            },
            {
              title: 'Page',
              link: '/ui-schema/globals/page',
            },
            {
              title: 'Tabs',
              link: '/ui-schema/globals/tabs',
            },
          ],
        },
        {
          title: 'Blocks',
          type: 'group',
          children: [
            {
              title: 'Overview',
              link: '/ui-schema/blocks',
            },
            {
              title: 'Data blocks',
              children: [
                {
                  title: 'Table',
                  link: '/ui-schema/blocks/data/table',
                },
                {
                  title: 'Form',
                  link: '/ui-schema/blocks/data/form',
                },
                {
                  title: 'Form(Read pretty)',
                  link: '/ui-schema/blocks/data/form-read-pretty',
                },
                {
                  title: 'Details',
                  link: '/ui-schema/blocks/data/details',
                },
                {
                  title: 'List',
                  link: '/ui-schema/blocks/data/list',
                },
                {
                  title: 'Grid Card',
                  link: '/ui-schema/blocks/data/grid-card',
                },
                {
                  title: 'Calendar',
                  link: '/ui-schema/blocks/data/calendar',
                },
                {
                  title: 'Kanban',
                  link: '/ui-schema/blocks/data/kanban',
                },
                {
                  title: 'Map',
                  link: '/ui-schema/blocks/data/map',
                },
                {
                  title: 'Gantt',
                  link: '/ui-schema/blocks/data/gantt',
                },
                {
                  title: 'Charts',
                  link: '/ui-schema/blocks/data/charts',
                },
              ],
            },
            {
              title: 'Filter blocks',
              children: [
                {
                  title: 'Collapse',
                  link: '/ui-schema/blocks/filter/collapse',
                },
                {
                  title: 'Form',
                  link: '/ui-schema/blocks/filter/form',
                },
              ],
            },
            {
              title: 'Other blocks',
              children: [
                {
                  title: 'iframe',
                  link: '/ui-schema/blocks/others/iframe',
                },
                {
                  title: 'Markdown',
                  link: '/ui-schema/blocks/others/markdown',
                },
                {
                  title: 'Workflow todos',
                  link: '/ui-schema/blocks/others/workflow-todo',
                },
              ],
            },
          ],
        },
        {
          title: 'Fields',
          type: 'group',
          children: [
            {
              title: 'Overview',
              link: '/ui-schema/fields',
            },
            {
              title: 'FormItem',
              link: '/ui-schema/fields/form-item',
            },
            {
              title: 'TableColumn',
              link: '/ui-schema/fields/table-column',
            },
            {
              title: 'Association',
              children: [
                {
                  title: 'Title',
                  link: '/ui-schema/fields/association-components/title',
                },
                {
                  title: 'Tag',
                  link: '/ui-schema/fields/association-components/tag',
                },
                {
                  title: 'Select',
                  link: '/ui-schema/fields/association-components/select',
                },
                {
                  title: 'RecordPicker',
                  link: '/ui-schema/fields/association-components/record-picker',
                },
                {
                  title: 'Cascader',
                  link: '/ui-schema/fields/association-components/cascader-select',
                },
                {
                  title: 'Sub-form',
                  link: '/ui-schema/fields/association-components/sub-form',
                },
                {
                  title: 'Sub-form(Popover)',
                  link: '/ui-schema/fields/association-components/sub-form-popover',
                },
                {
                  title: 'Sub-details',
                  link: '/ui-schema/fields/association-components/sub-details',
                },
                {
                  title: 'Sub-table',
                  link: '/ui-schema/fields/association-components/cascader-select',
                },
                {
                  title: 'File manager',
                  link: '/ui-schema/fields/association-components/file-manager',
                },
              ],
            },
          ],
        },
        {
          title: 'Actions',
          type: 'group',
          children: [
            {
              title: 'Overview',
              link: '/ui-schema/actions',
            },
            {
              title: 'Add new',
              link: '/ui-schema/actions/add-new',
            },
            {
              title: 'View',
              link: '/ui-schema/actions/view',
            },
            {
              title: 'Edit',
              link: '/ui-schema/actions/edit',
            },
            {
              title: 'Delete',
              link: '/ui-schema/actions/delete',
            },
            {
              title: 'Submit',
              link: '/ui-schema/actions/submit',
            },
            {
              title: 'Filter',
              link: '/ui-schema/actions/filter',
            },
            {
              title: 'Refresh',
              link: '/ui-schema/actions/refresh',
            },
            {
              title: 'Print',
              link: '/ui-schema/actions/print',
            },
            {
              title: 'Duplicate',
              link: '/ui-schema/actions/duplicate',
            },
            {
              title: 'Export',
              link: '/ui-schema/actions/export',
            },
            {
              title: 'Import',
              link: '/ui-schema/actions/import',
            },
            {
              title: 'Bulk update',
              link: '/ui-schema/actions/bulk-update',
            },
            {
              title: 'Bulk edit',
              link: '/ui-schema/actions/bulk-edit',
            },
            {
              title: 'Add record(任意表)',
              link: '/ui-schema/actions/add-record',
            },
            {
              title: 'Update record',
              link: '/ui-schema/actions/update-record',
            },
            {
              title: 'Save record',
              link: '/ui-schema/actions/save-record',
            },
            {
              title: 'Custom request',
              link: '/ui-schema/actions/custom-request',
            },
            {
              title: 'Submit to workflow',
              link: '/ui-schema/actions/submit-to-workflow',
            },
          ],
        },
      ],
    },
  }),
});
