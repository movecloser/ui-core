// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { SizeMap } from '../../../../composables'
import { getSizeControlOptions } from '../../../../helpers'

import { BootstrapTextArea } from './TextArea'
import { BootstrapTextAreaProps } from './TextArea.contracts'
import { BootstrapTextAreaSizeRegistry } from './TextArea.config'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'DSL/Bootstrap/Forms/Text',
  component: BootstrapTextArea,

  argTypes: {
    rows: { control: { type: 'number' } },
    size: {
      control: {
        type: 'select',
        options: getSizeControlOptions(BootstrapTextAreaSizeRegistry)
      }
    }
  }
}
export default meta

const Template: Story<BootstrapTextAreaProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      model: ''
    }
  },
  template: `
    <form :class="{ 'was-validated': wasValidated }">
      <UiText :model.sync="model" v-bind="{ disabled, valid, label, readonly, required, rows, size, errors }"
                  name="example_name" />
      <hr class="mt-5">
      <code class="small">Current value: "{{ model }}"</code>
    </form>`
})

export const Text = Template.bind({})
Text.args = {
  disabled: false,
  errors: ['has errors'],
  label: 'Lorem label',
  readonly: false,
  required: false,
  rows: 5,
  size: SizeMap.Medium,
  wasValidated: false
}
