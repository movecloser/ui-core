// Copyright © 2021 Move Closer

import VueRouter from 'vue-router'
import { Meta, Story } from '@storybook/vue'

import { BootstrapLink } from './Link'
import { BootstrapLinkProps } from './Link.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'DSL/Bootstrap/Link',
  component: BootstrapLink
}
export default meta

const defaultArgs = {
  link: {
    isExternal: false,
    label: 'Lorem label',
    newTab: false,
    target: ''
  }
}

/**
 * Default.
 */
const TDefault: Story<BootstrapLinkProps> = (args, { argTypes }) => ({
  router: new VueRouter(),
  props: Object.keys(argTypes),
  template: `
    <D24Link v-bind="{ link }" />
  `
})
export const Default = TDefault.bind({})
Default.args = defaultArgs

/**
 * External.
 */
const TExternal: Story<BootstrapLinkProps> = (args, { argTypes }) => ({
  router: new VueRouter(),
  props: Object.keys(argTypes),
  template: `
    <D24Link v-bind="{ link }" />
  `
})
export const External = TExternal.bind({})
External.args = {
  link: {
    isExternal: false,
    label: 'Lorem external',
    newTab: false,
    target: 'https://www.google.com'
  }
}

/**
 * Custom slot.
 */
const TCustomSlot: Story<BootstrapLinkProps> = (args, { argTypes }) => ({
  router: new VueRouter(),
  props: Object.keys(argTypes),
  template: `
    <D24Link v-bind="{ link }">
      <span class="position-absolute bg-white p-2">This image works as a link!</span>
      <img src="https://images.unsplash.com/photo-1619143921821-61e111505f3e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60" alt="" style="max-width: 400px">
    </D24Link>
  `
})
export const CustomSlot = TCustomSlot.bind({})
CustomSlot.args = defaultArgs
