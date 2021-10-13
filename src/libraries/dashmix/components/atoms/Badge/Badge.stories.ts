// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { DashmixTheme } from '../../../contracts'

import { DashmixBadgeProps, DashmixBadgeShape, DashmixBadgeVariantMap } from './Badge.contracts'
import { DashmixBadge } from './Badge'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Badge',
  component: DashmixBadge,
  argTypes: {
    shape: {
      control: {
        type: 'select',
        options: DashmixBadgeShape
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
        options: DashmixBadgeVariantMap
      }
    }
  }
}
export default meta

const defaultArgs = {
  label: 'Badge',
  shape: DashmixBadgeShape.Pill,
  theme: DashmixTheme.Primary,
  variant: DashmixBadgeVariantMap.Default
}

/**
 * Default.
 */
const TDefault: Story<DashmixBadgeProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <DsBadge v-bind="$props" />
  `
})
export const Default = TDefault.bind({})
Default.args = defaultArgs

/**
 * Custom <slot>.
 */
const TCustomSlot: Story<DashmixBadgeProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <DsBadge v-bind="$props">
    <template>
      <h1 class="m-0 px-3 text-uppercase">{{ label }}</h1>
    </template>
    </DsBadge>
  `
})
export const CustomSlot = TCustomSlot.bind({})
CustomSlot.args = defaultArgs
