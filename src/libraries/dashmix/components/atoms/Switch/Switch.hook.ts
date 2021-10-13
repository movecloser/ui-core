// Copyright © 2021 Move Closer

import { computed, PropType, SetupContext, toRef } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import {
  canBeDisabledProp,
  hasSizeProp,
  useSizeClass,
  useThemeClass
} from '../../../../../composables'

import { DashmixTheme } from '../../../contracts'

import { SwitchesProps } from './Switch.contracts'
import { dashmixSwitchSize, dashmixSwitchTheme } from './Switch.config'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const useSwitchesProps: ComponentObjectPropsOptions<SwitchesProps> = {
  ...hasSizeProp,
  ...canBeDisabledProp,

  options: {
    type: [Array, Object],
    required: true
  },
  name: {
    type: String,
    required: true
  },
  theme: {
    type: String as PropType<DashmixTheme>,
    required: false,
    default: DashmixTheme.Default
  },
  value: {
    type: [Boolean, String],
    required: true
  }
}

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const useSwitches = (props: SwitchesProps, ctx: SetupContext) => {
  const { emit } = ctx

  /**
   * CSS class defining the control's color mode.
   */
  const themeClass = useThemeClass(toRef(props, 'theme'), dashmixSwitchTheme)

  /**
   * CSS class defining the control's size.
   */
  const sizeClass = useSizeClass(toRef(props, 'size'), dashmixSwitchSize)

  /**
   * Getter and setter for use in `v-model` binding of the `<input>`.
   */
  const model = computed<boolean>({
    get (): boolean {
      if (typeof props.value === 'boolean') {
        return props.value
      } else {
        if (!Array.isArray(props.options)) {
          // Wrong switch configuration - developer error - if value is a string, labels should be arrays
          throw new Error('Wrong Switch configuration')
        }
        return props.value === props.options[1].value
      }
    },
    set (value) {
      if (typeof props.value === 'boolean') {
        emit('onChange', value)
      } else {
        if (!Array.isArray(props.options)) {
          // Wrong switch configuration - developer error - if value is a string, labels should be arrays
          throw new Error('Wrong Switch configuration')
        }
        emit('onChange', value ? props.options[1].value : props.options[0].value)
      }
    }
  })

  return { themeClass: themeClass.themeClass, sizeClass, model }
}
