// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { SizeMap } from '../../../../../composables'
import { DashmixTheme } from '../../../contracts'

import {
  DashmixBadgeShape,
  DashmixBadgeVariantMap,
  DashmixBadge,
  DashmixIconName
} from '../../atoms'

import { ActionBadgeProps } from './ActionBadge.constracts'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Action Badge',
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
    },
    icon: {
      control: {
        type: 'select',
        options: DashmixIconName
      }
    },
    buttonSize: {
      control: {
        type: 'select',
        options: SizeMap
      }
    }
  }
}
export default meta


const defaultArgs = {
  label: 'Acttion badge',
  shape: DashmixBadgeShape.Pill,
  theme: DashmixTheme.Primary,
  variant: DashmixBadgeVariantMap.Default,
  icon: DashmixIconName.Eye,
  buttonSize: SizeMap.Small,
  disabled: false
}

/**
 * Default.
 */
const actionBadge: Story<ActionBadgeProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <DsActionBadge v-bind="$props" />
  `
})
export const ActionBadge = actionBadge.bind({})
ActionBadge.args = defaultArgs

