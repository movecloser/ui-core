// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { SizeMap } from '../../_composables'
import { getSizeControlOptions } from '../../_helpers'

import { BootstrapCheck } from './Check'
import { BootstrapCheckProps } from './Check.contracts'
import { bootstrapCheckSizeRegistry } from './Check.config'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'DSL/Bootstrap/Forms',
  component: BootstrapCheck,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: getSizeControlOptions(bootstrapCheckSizeRegistry)
      }
    }
  }
}
export default meta

const defaultArgs = {
  disabled: false,
  valid: false,
  label: 'Lorem label',
  options: [
    { label: 'Lorem', value: 'lorem' },
    { label: 'Ipsum', value: 'ipsum' },
    { label: 'Dolor', value: 'dolor' }
  ],
  readonly: false,
  required: false,
  size: SizeMap.Medium,
  wasValidated: false,
  errors: ['has errors']
}

/**
 * Checkbox.
 */
const TCheckbox: Story<BootstrapCheckProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      model: []
    }
  },
  template: `
    <form :class="{ 'was-validated': wasValidated }">
      <D24Check :model.sync="model" v-bind="{ disabled, valid, label, options, readonly, required, size, errors }"
                    name="example_name" :multiple="true" />
      <hr class="mt-5">
      <code class="small">Current value: "{{ model }}"</code>
    </form>`
})
export const Checkbox = TCheckbox.bind({})
Checkbox.args = defaultArgs

/**
 * Radio.
 */
const TRadio: Story<BootstrapCheckProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      model: []
    }
  },
  template: `
    <form :class="{ 'was-validated': wasValidated }">
      <D24Check :model.sync="model" v-bind="{ disabled, valid, label, options, readonly, required, size, errors }"
                   name="example_name" :multiple="false" />
      <hr class="mt-5">
      <code class="small">Current value: "{{ model }}"</code>
    </form>`
})
export const Radio = TRadio.bind({})
Radio.args = defaultArgs
