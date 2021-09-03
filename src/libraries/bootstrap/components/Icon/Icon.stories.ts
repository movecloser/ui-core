// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { getTemplateBase } from '../../storybook'

import { BootstrapIcon } from './Icon'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core/Bootstrap/Icon',
  component: BootstrapIcon
}
export default meta

const Template: Story = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapIcon },
  template: `
    <BootstrapIcon v-bind="$props" />
  `
})

export const Icon = Template.bind({})
Icon.args = {
  name: 'check'
}
