import * as React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: { onClick: { action: 'clicked' } },
} as Meta;

const Template: Story = (args) => (
  <Button
    className={args.className}
    disabled={args.disabled}
    onClick={args.onClick}
  >
    {args.text}
  </Button>
);

export const ButtonStory = Template.bind({});
ButtonStory.storyName = 'Button';
ButtonStory.args = {
  className: '',
  disabled: false,
  text: 'Button',
};
