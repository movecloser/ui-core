// Copyright © 2021 Move Closer

import {
  computed,
  onMounted,
  PropType,
  ref,
  SetupContext,
  watch,
  onUnmounted,
  Ref
} from '@vue/composition-api'
import { debounce } from 'lodash'
import { VueConstructor } from 'vue'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import { DropdownItem } from '../../../../../abstract/components/Dropdown'

import { DashmixTheme } from '../../../contracts'

import { DashmixBadgeVariant, DashmixBadgeVariantMap } from '../../atoms'

import { Hint, TypeaheadProps, UseTypeahead } from './Typeahead.contracts'
import { Size, SizeMap } from '../../../../../composables'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const typeaheadProps: ComponentObjectPropsOptions<TypeaheadProps> = {
  autofocus: {
    type: Boolean,
    required: false
  },
  badgeMaxLength: {
    type: Number,
    required: false,
    default: 30
  },
  badgeTheme: {
    type: String as PropType<DashmixTheme>,
    required: false,
    default: DashmixTheme.Light
  },
  badgeVariant: {
    type: String as PropType<DashmixBadgeVariant>,
    required: false,
    default: DashmixBadgeVariantMap.Default
  },
  clearable: {
    type: Boolean,
    required: false,
    default: false
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  error: {
    type: Boolean,
    required: false,
    default: false
  },
  hints: {
    type: Array as PropType<Hint[]>,
    required: true
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
  name: {
    type: String,
    required: true
  },
  noResults: {
    type: String,
    required: false,
    default: 'atoms.noResults'
  },
  newResult: {
    type: String,
    required: false,
    default: 'atoms.add'
  },
  placeholder: {
    type: String,
    required: false,
    default: 'atoms.typeaheadPlaceholder'
  },
  taggable: {
    type: Boolean,
    required: false,
    default: true
  },
  size: {
    type: String as PropType<Size>,
    required: false,
    default: () => SizeMap.Medium
  },
  selected: {
    type: Array as PropType<Hint[]>,
    required: false,
    default: () => []
  },
  showSelection: {
    type: Boolean,
    required: false,
    default: true
  },
  useDebounce: {
    type: Boolean,
    required: false,
    default: false
  }
}

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const useTypeahead = (props: TypeaheadProps, ctx: SetupContext): UseTypeahead => {
  const { emit } = ctx

  const dropdown: Ref<null | HTMLElement> = ref(null)
  const input: Ref<null | VueConstructor> = ref(null)
  const value = ref<string>('')

  function hintSelected (hint: Hint) {
    const onSearchCallback = () => {
      emit('selected', hint)
    }

    setTimeout(() => {
      value.value = ''
    }, 0)

    if (hint.value && props.selected.map(s => s.value).includes(hint.value)) {
      return
    }

    if (props.useDebounce) {
      debounce(onSearchCallback, 400)
    } else {
      onSearchCallback()
    }
  }

  const dropdownItems = computed(() => {
    const tempHints: DropdownItem[] = props.hints.map(hint => {
      return {
        type: 'item',
        label: hint.label,
        onClick: () => {
          hintSelected(hint)
        }
      }
    })

    if (value.value.length > 2 && props.taggable) {
      tempHints.unshift({
        type: 'divider'
      })
      tempHints.unshift({
        type: 'item',
        label: `${props.newResult}: ${value.value}`,
        onClick: () => {
          hintSelected({ label: value.value, value: '', new: true })
        }
      })
    }

    // If there are no hints and no prepend element is defined, display noResults element
    if (props.hints.length < 1 && props.noResults) {
      tempHints.push({
        type: 'item',
        label: `${props.noResults}`
      })
    }

    return tempHints
  })

  const enterPressed = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && value.value.length > 2) {
      const hint = { label: value.value, value: '' }
      emit('selected', hint)
      value.value = ''
    }
  }

  const hintSearch = debounce((newValue: string) => {
    hintSearch.cancel()

    if (newValue.length > 2) {
      emit('searched', newValue)
    }
  }, 200)

  const onClear = () => {
    value.value = ''
  }

  const onInputChange = (newValue: string) => {
    value.value = newValue
  }

  watch(value, (newValue: string) => {
    if (!newValue) {
      return emit('cleared')
    }
    hintSearch(newValue)
  })

  onMounted(() => {
    window.addEventListener('keyup', enterPressed)
  })

  onUnmounted(() => {
    window.removeEventListener('keyup', enterPressed)
  })

  return { dropdown, dropdownItems, onClear, onInputChange, input, value }
}
