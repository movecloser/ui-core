// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { DashmixInput } from './Input'
import { DashmixInputProps } from './Input.contracts'
import { SizeMap } from '../../../../../composables'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Input',
  component: DashmixInput,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: SizeMap
      }
    }
  }
}
export default meta

const Template: Story<DashmixInputProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  data () {
    return {
      model: ''
    }
  },

  template: `
    <div>
    <DsInput :model.sync="model"
             v-bind="{ autofocus, autocomplete, size, disabled, name, placeholder, readonly, type }" />
    <hr class="mt-5">
    <code class="small">Current value: "{{ model }}"</code>
    </div>
  `
})

export const Input = Template.bind({})
Input.args = {
  autocomplete: 'on',
  autofocus: false,
  disabled: false,
  name: 'lorem_name',
  placeholder: 'Lorem placeholder',
  readonly: false,
  type: 'text',
  size: SizeMap.Medium
}
