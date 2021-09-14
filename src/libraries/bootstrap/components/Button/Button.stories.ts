// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { BootstrapSize, BootstrapTheme } from '../../contracts'
import { getTemplateBase } from '../../storybook'

import { BootstrapButton } from './Button'
import { BootstrapButtonProps } from './Button.contract'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core/Bootstrap/Button',
  component: BootstrapButton,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: BootstrapSize
      }
    },
    theme: {
      control: {
        type: 'select',
        options: BootstrapTheme
      }
    }
  }
}
export default meta

const Template: Story<BootstrapButtonProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapButton },

  methods: {
    onClick () {
      console.debug('🏷 onClick()')
    }
  },

  template: `
    <BootstrapButton v-bind="$props" @click="onClick">
      Lorem ipsum
    </BootstrapButton>
  `
})

export const Button = Template.bind({})
Button.args = {
  disabled: false,
  link: false,
  loading: false,
  outline: false,
  size: BootstrapSize.Normal,
  theme: BootstrapTheme.Primary
}
