/**
 * This file is part of the NocoBase (R) project.
 * Copyright (c) 2020-2024 NocoBase Co., Ltd.
 * Authors: NocoBase Team.
 *
 * This project is dual-licensed under AGPL-3.0 and NocoBase Commercial License.
 * For more information, please refer to: https://www.nocobase.com/agreement.
 */

import { Modal } from 'antd';
import React from 'react';
import type { ComponentDemo } from '../../interface';

const { _InternalPanelDoNotUseOrYouWillBeFired } = Modal;
const Demo = () => {
  return (
    <>
      <_InternalPanelDoNotUseOrYouWillBeFired title="Basic Modal">
        <p>Some contents...</p> <p>Some contents...</p> <p>Some contents...</p>
      </_InternalPanelDoNotUseOrYouWillBeFired>
    </>
  );
};

const componentDemo: ComponentDemo = {
  demo: <Demo />,
  tokens: ['colorInfo'],
  key: 'info',
};
export default componentDemo;
