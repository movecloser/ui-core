// Copyright © 2021 Move Closer

import { computed, PropType, SetupContext, toRef } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import { hasSizeProp, useSizeClass } from '../../../../../composables'

import { DashmixSelectItem, DashmixSelectProps } from './Select.contracts'
import { sizeRegistry } from './Select.config'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const dashmixSelectProps: ComponentObjectPropsOptions<DashmixSelectProps> = {
  ...hasSizeProp,

  autocomplete: {
    type: String,
    default: 'off'
  },

  clearable: {
    type: Boolean,
    default: false
  },

  disabled: {
    type: Boolean,
    required: false,
    default: false
  },

  filterBy: {
    type: Function as PropType<() => unknown>,
    required: false
  },

  loading: {
    type: Boolean,
    required: false,
    default: false
  },

  model: {
    required: true
  },

  multiple: {
    type: Boolean,
    required: false,
    default: false
  },

  options: {
    type: Array as PropType<DashmixSelectItem[]>,
    required: true
  },

  placeholder: {
    type: String,
    required: false,
    default: ''
  },

  searchable: {
    type: Boolean,
    required: false,
    default: false
  },

  taggable: {
    type: Boolean,
    required: false,
    default: false
  }
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useDashmixSelect = (props: DashmixSelectProps, ctx: SetupContext) => {
  // Extract the `emit()` function.
  const { emit } = ctx

  // Variable to storage taggable options
  let customOptions: DashmixSelectItem[] = []

  const sizeClass = useSizeClass(toRef(props, 'size'), sizeRegistry)

  /**
   * Getter and setter for use in `v-model` binding of the `<VSelect>`.
   */
  const _model = computed<DashmixSelectItem | DashmixSelectItem[] | undefined>({
    get (): DashmixSelectItem | DashmixSelectItem[] | undefined {
      if (props.multiple) {
        const filteredOptions = props.options.filter(_option => Array.isArray(props.model) && props.model.includes(
          _option.value))
        if (props.taggable && Array.isArray(props.model)) {
          // Add tagged options to _model
          return [...filteredOptions, ...customOptions]
        }
        return filteredOptions
      }
      return props.options.find(_option => _option.value === props.model)
    },

    set (value: DashmixSelectItem | DashmixSelectItem[] | undefined) {
      if (typeof value === 'undefined') {
        emit('update:model', value)
      } else if (Array.isArray(value)) {
        // Add selected tagged options to customOptions
        customOptions = value.filter(v => !v.value)

        emit('update:model', value.map(o => o.value ? o.value : o.label))
      } else {
        emit('update:model', value.value)
      }
    }
  })

  return { _model, sizeClass }
}
