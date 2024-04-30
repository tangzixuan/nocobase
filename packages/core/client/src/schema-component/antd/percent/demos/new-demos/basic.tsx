import { getAppComponent } from '@nocobase/test/web';

const App = getAppComponent({
  schema: {
    type: 'void',
    name: 'root',
    'x-decorator': 'FormV2',
    'x-component': 'ShowFormData',
    properties: {
      test: {
        type: 'number',
        title: 'Test',
        'x-decorator': 'FormItem',
        'x-component': 'Percent',
      },
    },
  },
});

export default App;
