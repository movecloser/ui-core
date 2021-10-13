// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { SizeMap } from '../../../../../composables'

import { DashmixTheme } from '../../../contracts'

import { DashmixCheck } from './Check'
import { DashmixCheckProps } from './Check.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Check',
  component: DashmixCheck,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: SizeMap
      }
    },
    theme: {
      control: {
        type: 'select',
        options: DashmixTheme
      }
    }
  }
}
export default meta

const Template: Story<DashmixCheckProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  data () {
    return {
      model: false
    }
  },

  template: `
    <div>
    <DsCheck name="checkbox" :model.sync="model" v-bind="{ disabled, label, value, size, theme }" />
    <hr class="mt-5">
    <code class="small">Current value: "{{ model }}"</code>
    </div>
  `
})

const defaultArgs = {
  disabled: false,
  label: 'Check me if you\'re smart',
  value: true,
  size: SizeMap.Large,
  theme: DashmixTheme.Primary
}

/**
 * Checkbox.
 */
export const Checkbox = Template.bind({})
Checkbox.args = {
  ...defaultArgs
}
