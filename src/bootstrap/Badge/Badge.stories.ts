// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { BootstrapBadge } from './Badge'
import { BootstrapBadgeProps, BootstrapBadgeTheme } from './Badge.contracts'

/**
 * @author Sebastian Dziechciarz <sebastian.dziechciarz@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'DSL/Bootstrap/Badge',
  component: BootstrapBadge,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: BootstrapBadgeTheme
      }
    }
  }
}
export default meta

const defaultArgs = {
  content: 'Lorem ipsum',
  tag: 'span',
  theme: BootstrapBadgeTheme.Red
}

/**
 * Default.
 */
const TDefault: Story<BootstrapBadgeProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <D24Badge v-bind="{ tag, theme }">{{ content }}</D24Badge>
  `
})
export const Default = TDefault.bind({})
Default.args = defaultArgs

/**
 * Custom `<slot>`.
 */
const TCustomSlot: Story<BootstrapBadgeProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <D24Badge v-bind="$props">
      <D24Button class="btn-secondary btn-sm text-uppercase">{{ content }}</D24Button>
    </D24Badge>
  `
})
export const CustomSlot = TCustomSlot.bind({})
CustomSlot.args = {
  ...defaultArgs,
  tag: 'div'
}
