// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

// import icomoon from '../../../../context/client-app/assets/fonts/icomoon/selection.json'

import { SizeMap } from '../../../../composables'
import { getSizeControlOptions } from '../../../../helpers'

import { BootstrapInput } from './Input'
import { BootstrapInputProps, BootstrapInputType } from './Input.contracts'
import { bootstrapInputSizeRegistry } from './Input.config'

// const availableIcons = (icomoon).icons.map((icon: { properties: { name: string } }) => icon.properties.name)

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'DSL/Bootstrap/Forms/Input',
  component: BootstrapInput,

  argTypes: {
    // icon: {
    //   control: {
    //     type: 'select',
    //     options: availableIcons
    //   }
    // },
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
  props: Object.keys(argTypes),
  data () {
    return {
      model: ''
    }
  },
  template: `
    <form :class="{ 'was-validated': wasValidated }">
      <UiInput :model.sync="model" v-bind="{ disabled, icon, valid, label, readonly, required, size, type, errors }"
                   name="example_name" />
      <hr class="mt-5">
      <code class="small">Current value: "{{ model }}"</code>
    </form>`
})

export const Input = Template.bind({})
Input.args = {
  disabled: false,
  icon: '',
  label: 'Lorem label',
  errors: ['has errors'],
  readonly: false,
  required: false,
  size: SizeMap.Medium,
  type: BootstrapInputType.Text
}
