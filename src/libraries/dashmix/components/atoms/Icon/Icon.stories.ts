// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { SizeMap } from '../../../../../composables'

import { DashmixIcon } from './Icon'
import { DashmixIconName, DashmixIconProps } from './Icon.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Icon',
  component: DashmixIcon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: DashmixIconName
      }
    },
    size: {
      control: {
        type: 'select',
        options: SizeMap
      }
    }
  }
}
export default meta

const Template: Story<DashmixIconProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <DsIcon v-bind="{ icon, size, spin, pulse }" />
  `
})

export const Icon = Template.bind({})
Icon.args = {
  icon: DashmixIconName.TrashSolid,
  spin: false,
  pulse: false
}
