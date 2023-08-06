import React from 'react';
import { Story, Meta } from '@storybook/react';
import SelectField, { SelectFieldProps } from './SelectField';

export default {
  title: 'Components/SelectField',
  component: SelectField,
} as Meta;

const Template: Story<SelectFieldProps> = (args) => <SelectField {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  value: 'Option 1',
  onChange: () => {},
};
