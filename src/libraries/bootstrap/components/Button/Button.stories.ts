// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { BootstrapSize, BootstrapTheme } from '../../contracts'
import { getTemplateBase } from '../../storybook'

import { BootstrapButton } from './Button'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core/Bootstrap/Button',
  component: BootstrapButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: BootstrapSize
      }
    },
    theme: {
      control: {
        type: 'select',
        options: BootstrapTheme
      }
    }
  }
}
export default meta

const Template: Story = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapButton },
  template: '<BootstrapButton v-bind="$props">Lorem ipsum</BootstrapButton>'
})

export const Button = Template.bind({})
Button.args = {
  disabled: false,
  loading: false,
  size: BootstrapSize.Normal,
  theme: BootstrapTheme.Primary
}
