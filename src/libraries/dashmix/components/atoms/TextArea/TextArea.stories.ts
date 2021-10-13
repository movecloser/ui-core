// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { DashmixTextArea } from './TextArea'
import { DashmixTextAreaProps } from './TextArea.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Text Area',
  component: DashmixTextArea
}
export default meta

const Template: Story<DashmixTextAreaProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  data () {
    return {
      model: ''
    }
  },

  template: `
    <div>
    <DsTextArea :model.sync="model" v-bind="$props" />
    <hr class="mt-5">
    <code class="small">Current value: "{{ model }}"</code>
    </div>
  `
})

export const TextArea = Template.bind({})
TextArea.args = {
  autocomplete: 'off',
  disabled: false,
  name: 'example_name',
  placeholder: 'Lorem placeholder',
  readonly: false,
  rows: 5
}
