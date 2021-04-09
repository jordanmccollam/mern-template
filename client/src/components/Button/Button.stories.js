import React from 'react';
import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {

  }
}

const Template = (args) => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  
}
export const Primary = Template.bind({})
Primary.args = {
  kind: 'primary'
}
export const Secondary = Template.bind({})
Secondary.args = {
  kind: 'secondary'
}
export const Ghost = Template.bind({})
Ghost.args = {
  kind: 'ghost'
}

