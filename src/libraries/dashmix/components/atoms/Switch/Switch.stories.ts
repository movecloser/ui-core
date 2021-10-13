// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { SizeMap } from '../../../../../composables'
import { DashmixTheme } from '../../../contracts'

import { DashmixSwitch } from './Switch'
import { SwitchesProps } from './Switch.contracts'
import { getTemplateBase } from '../../../storybook/template-base'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Siwtch',
  component: DashmixSwitch,
  argTypes: {
    theme: {
      control: {
        type: 'select',
        options: DashmixTheme
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

const defaultArgs = {
  value: 'on',
  name: 'switch',
  theme: DashmixTheme.Danger,
  size: SizeMap.Small,
  disabled: false,
  options: [
    {
      label: 'off',
      value: 'off'
    },
    {
      label: 'on',
      value: 'on'
    }
  ]
}

/**
 * Default.
 */
const template: Story<SwitchesProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  props: Object.keys(argTypes),
  template: `
    <DsSwitch v-bind="$props" />
  `
})
export const Switch = template.bind({})
Switch.args = defaultArgs
