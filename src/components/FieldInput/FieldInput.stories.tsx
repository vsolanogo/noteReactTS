import React from 'react';
import { Story, Meta } from '@storybook/react';
import FieldInput, { FieldInputProps } from './FieldInput';

export default {
  title: 'Components/FieldInput',
  component: FieldInput,
  argTypes: { onChange: { action: 'changed' } },
} as Meta;

const Template: Story<FieldInputProps> = (args) => <FieldInput {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  value: '',
  onChange: () => {},
  placeholder: 'Enter text...',
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: '',
  onChange: () => {},
  placeholder: 'Disabled input...',
  disabled: true,
};
