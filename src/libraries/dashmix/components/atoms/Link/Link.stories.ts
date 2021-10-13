// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import VueRouter from 'vue-router'

import { DashmixLink } from './Link'
import { LinkProps } from './Link.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Link',
  component: DashmixLink
}
export default meta

const defaultArgs = {
  disabled: false,
  external: true,
  newTab: false,
  target: '/hello'
}

/**
 * Default.
 */
const TDefault: Story<LinkProps> = (args, { argTypes }) => ({
  router: new VueRouter(),
  props: Object.keys(argTypes),
  template: `
    <div>
    <DsLink v-bind="{ disabled, external, newTab, target }">Lorem link</DsLink>
    </div>
  `
})
export const Default = TDefault.bind({})
Default.args = defaultArgs

/**
 * Custom slot.
 */
const TCustomSlot: Story<LinkProps> = (args, { argTypes }) => ({
  router: new VueRouter(),
  props: Object.keys(argTypes),
  template: `
    <div>
    <DLink v-bind="{ disabled, external, newTab, target }">
      <span class="position-absolute bg-white p-2">This image works as a link!</span>
      <img src="https://www.gstatic.com/webp/gallery/1.jpg" alt="">
    </DLink>
    </div>
  `
})
export const CustomSlot = TCustomSlot.bind({})
CustomSlot.args = defaultArgs
