// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { getSizeControlOptions } from '../../../../helpers'
import { SizeMap } from '../../../../composables'

import { BootstrapButton } from './Button'
import { BootstrapButtonProps } from './Button.contracts'
import { bootstrapButtonSizeRegistry } from './Button.config'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'DSL/Bootstrap/Button',
  component: BootstrapButton,

  argTypes: {
    className: { table: { disable: true } },

    size: {
      control: {
        type: 'select',
        options: getSizeControlOptions(bootstrapButtonSizeRegistry)
      }
    }
  }
}
export default meta

const Template: Story<BootstrapButtonProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  methods: {
    onClick () {
      console.debug('onClick()')
    }
  },
  template: `
    <UiButton v-bind="{ disabled, size }" @click="onClick"
              :class="[className, square ? 'btn-square' : '']">
      {{ content }}
    </UiButton>`
})

const defaultArgs = {
  content: 'BUTTON',
  disabled: false,
  size: SizeMap.Medium,
  square: false
}

/**
 * Primary.
 */
export const Primary = Template.bind({})
Primary.args = {
  ...defaultArgs,
  className: 'btn-primary'
}

/**
 * Secondary.
 */
export const Secondary = Template.bind({})
Secondary.args = {
  ...defaultArgs,
  className: 'btn-secondary'
}

/**
 * Secondary Dark.
 */
export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  ...defaultArgs,
  className: 'btn-secondary-dark'
}
SecondaryDark.parameters = {
  backgrounds: { default: 'black' }
}

/**
 * CTA.
 */
export const CTA = Template.bind({})
CTA.args = {
  ...defaultArgs,
  className: 'btn-cta'
}

/**
 * Link.
 */
export const Link = Template.bind({})
Link.args = {
  ...defaultArgs,
  className: 'btn-link'
}

/**
 * Link Dark.
 */
export const LinkDark = Template.bind({})
LinkDark.args = {
  ...defaultArgs,
  className: 'btn-link-dark'
}
LinkDark.parameters = {
  backgrounds: { default: 'black' }
}
