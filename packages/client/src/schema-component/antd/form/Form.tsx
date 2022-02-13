import { FormLayout } from '@formily/antd';
import { createForm } from '@formily/core';
import { FieldContext, FormContext, observer, useField, useFieldSchema } from '@formily/react';
import { Options, Result } from 'ahooks/lib/useRequest/src/types';
import { Spin } from 'antd';
import React, { useMemo } from 'react';
import { useAttach } from '../..';
import { useRequest } from '../../../api-client';

type Opts = Options<any, any> & { uid?: string };

export interface FormProps {
  [key: string]: any;
}

export type FormUseValues = (props?: FormProps, opts?: Opts) => Result<any, any>;

const FormComponent: React.FC<FormProps> = (props) => {
  const { form, children, ...others } = props;
  const field = useField();
  // TODO: component 里 useField 会与当前 field 存在偏差
  const f = useAttach(form.createVoidField({ ...field.props, basePath: '' }));
  return (
    <FieldContext.Provider value={undefined}>
      <FormContext.Provider value={form}>
        <FormLayout layout={'vertical'} {...others}>
          <FieldContext.Provider value={f}>{children}</FieldContext.Provider>
        </FormLayout>
      </FormContext.Provider>
    </FieldContext.Provider>
  );
};

const useRequestProps = (props: any) => {
  const { request, initialValue } = props;
  if (request) {
    return request;
  }
  return () => {
    return Promise.resolve({
      data: initialValue,
    });
  };
};

const useDef = (props: FormProps = {}, opts: any = {}) => {
  return useRequest(useRequestProps(props), opts);
};

export const Form: React.FC<FormProps> = observer((props) => {
  const { request, initialValue, useValues = useDef, ...others } = props;
  const fieldSchema = useFieldSchema();
  const form = useMemo(() => createForm(), []);
  const { loading } = useValues(props, {
    uid: fieldSchema['x-uid'],
    async onSuccess(data) {
      await form.reset();
      form.setValues(data?.data);
    },
  });
  return (
    <Spin spinning={loading}>
      <FormComponent form={form} {...others} />
    </Spin>
  );
});
