/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { NAMESPACE } from '../../locale';
import common from './common';

export default {
  title: `{{t("Aliyun OSS", { ns: "${NAMESPACE}" })}}`,
  name: 'ali-oss',
  properties: {
    title: common.title,
    name: common.name,
    baseUrl: common.baseUrl,
    options: {
      type: 'object',
      'x-component': 'div',
      properties: {
        region: {
          title: `{{t("Region", { ns: "${NAMESPACE}" })}}`,
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          required: true,
        },
        accessKeyId: {
          title: `{{t("AccessKey ID", { ns: "${NAMESPACE}" })}}`,
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          required: true,
        },
        accessKeySecret: {
          title: `{{t("AccessKey Secret", { ns: "${NAMESPACE}" })}}`,
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Password',
          required: true,
        },
        bucket: {
          title: `{{t("Bucket", { ns: "${NAMESPACE}" })}}`,
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          required: true,
        },
        thumbnailRule: {
          title: 'Thumbnail rule',
          type: 'string',
          'x-decorator': 'FormItem',
          'x-component': 'Input',
          'x-component-props': {
            placeholder: '?x-oss-process=image/auto-orient,1/resize,m_fill,w_94,h_94/quality,q_90',
          },
          default: '?x-oss-process=image/auto-orient,1/resize,m_fill,w_94,h_94/quality,q_90',
          description: '{{ xStyleProcessDesc }}',
        },
      },
    },
    path: common.path,
    rules: common.rules,
    default: common.default,
    paranoid: common.paranoid,
  },
};
