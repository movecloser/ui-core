// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { getTemplateBase } from '../../storybook'

import { BootstrapLink } from './Link'
import { BootstrapLinkProps } from './Link.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Bootstrap / Link',
  component: BootstrapLink
}
export default meta

const defaultArgs: Partial<BootstrapLinkProps> = {
  link: {
    isExternal: false,
    label: 'Lorem label',
    newTab: false,
    target: '/lorem/ipsum'
  }
}

const TDefault: Story<BootstrapLinkProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapLink },
  template: `
    <BootstrapLink v-bind="$props" />
  `
})
export const Default = TDefault.bind({})
Default.args = defaultArgs

const TExternal: Story<BootstrapLinkProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapLink },
  template: `
    <BootstrapLink v-bind="$props" />
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

const TCustomSlot: Story<BootstrapLinkProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapLink },
  template: `
    <BootstrapLink v-bind="$props">
    <span class="position-absolute bg-white p-2">This image works as a link!</span>
    <img
        src="https://images.unsplash.com/photo-1619143921821-61e111505f3e?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
        alt="" style="max-width: 400px">
    </BootstrapLink>
  `
})
export const CustomSlot = TCustomSlot.bind({})
CustomSlot.args = defaultArgs
