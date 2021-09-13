// Copyright © 2021 Move Closer

import * as faker from 'faker'
import { Meta, Story } from '@storybook/vue'

import { SizeMap } from '../../../../composables'

import { getSizeControlOptions, getTemplateBase } from '../../storybook'

import { BootstrapInput } from './Input'
import { BootstrapInputProps, BootstrapInputType } from './Input.contracts'
import { bootstrapInputSizeRegistry } from './Input.config'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core/Bootstrap/Forms/Input',
  component: BootstrapInput,

  argTypes: {
    size: {
      control: {
        type: 'select',
        options: getSizeControlOptions(bootstrapInputSizeRegistry)
      }
    },
    type: {
      control: {
        type: 'select',
        options: BootstrapInputType
      }
    }
  }
}
export default meta

const Template: Story<BootstrapInputProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapInput },
  data () {
    return {
      model: ''
    }
  },
  template: `
    <form>
      <BootstrapInput :model.sync="model" name="example_name"
                      v-bind="$props" />
      <hr class="mt-5">
      <code class="small">Current value: "{{ model }}"</code>
    </form>`
})

export const Input = Template.bind({})
Input.args = {
  disabled: false,
  icon: '',
  label: 'Lorem label',
  placeholder: 'Lorem placeholder',
  readonly: false,
  required: false,
  size: SizeMap.Medium,
  type: BootstrapInputType.Text
}
