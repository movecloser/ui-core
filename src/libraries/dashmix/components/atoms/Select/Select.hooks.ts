// Copyright © 2021 Move Closer

import { computed, PropType, SetupContext, toRef } from '@vue/composition-api'
import { createPopper } from '@popperjs/core'
import { VueSelectInstance } from 'vue-select'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import { hasSizeProp, useSizeClass } from '../../../../../composables'

import { CalculatedPosition, DashmixSelectItem, DashmixSelectProps } from './Select.contracts'
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
  },

  withDynamicPosition: {
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

  const isSimpleLabel = computed<boolean>(() => {
    if (props.options.length === 0) {
      return true
    }
    return typeof props.options[0].label === 'string'
  })

  // Method from VSelect documentation
  const withPopper = (dropdownList: HTMLUListElement, component: VueSelectInstance, { width }: CalculatedPosition) => {
    if (!props.withDynamicPosition) {
      return
    }
    /**
     * We need to explicitly define the dropdown width since
     * it is usually inherited from the parent with CSS.
     *
     */
    dropdownList.style.width = width

     /**
     * Here we position the dropdownList relative to the $refs.toggle Element.
     *
     * The 'offset' modifier aligns the dropdown so that the $refs.toggle and
     * the dropdownList overlap by 1 pixel.
     *
     * The 'toggleClass' modifier adds a 'drop-up' class to the Vue Select
     * wrapper so that we can set some styles for when the dropdown is placed
     * above.
     */

    if (!component.$refs || !component.$refs.toggle) {
      return
    }
    const popper = createPopper((component.$refs.toggle as Element), dropdownList, {
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 2]
          }
        },
        {
          name: 'toggleClass',
          enabled: true,
          phase: 'write',
          fn ({ state }) {
            component.$el.classList.toggle(
              'drop-up',
              state.placement === 'top'
            )
          }
        }
      ]
    })

    /**
     * To prevent memory leaks Popper needs to be destroyed.
     * If you return function, it will be called just before dropdown is removed from DOM.
     */
    return () => popper.destroy()
  }

  return { _model, sizeClass, isSimpleLabel, withPopper }
}
