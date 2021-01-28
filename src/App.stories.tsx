import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1

import App from './App';

export default {
  title: 'Example/Button',
  component: App,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = () => <App />;

export const DefaultApp = Template.bind({});
