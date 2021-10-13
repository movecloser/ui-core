// Copyright © 2021 Move Closer

import { computed, PropType, SetupContext } from '@vue/composition-api'

import { ComponentObjectPropsOptions, FormControlModelType } from '../../../../../../contracts'
import { Size, SizeMap } from '../../../../../../composables'

import { InputTypeaheadProps } from './InputTypeahead.contracts'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const inputTypeaheadProps: ComponentObjectPropsOptions<InputTypeaheadProps> = {
  autofocus: {
    type: Boolean,
    required: false,
    default: false
  },
  clearable: {
    type: Boolean,
    required: true,
    default: true
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  isMulti: {
    type: Boolean,
    required: false,
    default: true
  },
  loading: {
    type: Boolean,
    required: false,
    default: false
  },
  model: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    required: false
  },
  size: {
    type: String as PropType<Size>,
    required: false,
    default: () => SizeMap.Medium
  }
}

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const useInputTypeahead = (props: InputTypeaheadProps, ctx: SetupContext) => {
  const value = computed<FormControlModelType>({
    get () {
      return props.model
    },
    set (newValue: FormControlModelType) {
      ctx.emit('onInput', newValue)
    }
  })

  return { value }
}
