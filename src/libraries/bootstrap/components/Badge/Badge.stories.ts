// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { BootstrapSize, BootstrapTheme } from '../../contracts'
import { getTemplateBase } from '../../storybook'

import { BootstrapBadge } from './Badge'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core/Bootstrap/Badge',
  component: BootstrapBadge,
  argTypes: {
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
  components: { BootstrapBadge },
  template: '<BootstrapBadge v-bind="$props">Lorem ipsum</BootstrapBadge>'
})

export const Badge = Template.bind({})
Badge.args = {
  theme: BootstrapTheme.Primary
}
