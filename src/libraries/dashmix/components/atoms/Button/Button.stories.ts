// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { SizeMap } from '../../../../../composables'

import { DashmixTheme } from '../../../contracts'

import { DashmixIconName } from '../Icon'

import { DashmixButtonProps, DashmixButtonVariantMap } from './Button.contract'
import { DashmixButton } from './Button'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Button',
  component: DashmixButton,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: DashmixIconName
      }
    },
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
    },
    variant: {
      control: {
        type: 'select',
        options: DashmixButtonVariantMap
      }
    }
  }
}
export default meta

const Template: Story<DashmixButtonProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  methods: {
    onClick () {
      alert('onClick()')
    }
  },
  template: `
    <DsButton
        v-bind="{ doubleClick, icon, disabled, loading, label, size, theme, variant, alwaysWithLabel }"
        @click="onClick" />
  `
})

const defaultArgs = {
  alwaysWithLabel: true,
  doubleClick: false,
  disabled: false,
  loading: false,
  label: 'Click me',
  size: SizeMap.Medium,
  theme: DashmixTheme.Primary,
  variant: DashmixButtonVariantMap.Default
}

/**
 * Primary.
 */
export const Primary = Template.bind({})
Primary.args = defaultArgs
