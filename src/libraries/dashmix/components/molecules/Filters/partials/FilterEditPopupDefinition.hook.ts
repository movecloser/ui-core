// Copyright © 2021 Move Closer

import {
  ComponentInternalInstance,
  computed,
  PropType,
  ref,
  toRef,
  watch
} from '@vue/composition-api'
import { debounce } from 'lodash'
import { FilterOperator, FilterParams } from '@movecloser/front-core'

import { ComponentObjectPropsOptions } from '../../../../../../contracts'

import { DashmixSelectItem } from '../../../atoms'
import { Hint } from '../../Typeahead'

import { buildDictionaryOptions, buildOperatorsOptions } from '../Filters.helpers'
import {
  FilterEditPopupDefinitionProps,
  FilterType,
  Group,
  GroupsDictionaries,
  UseFilterEditPopupDefinition
} from '../Filters.contracts'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const useFilterEditPopupDefinitionProps: ComponentObjectPropsOptions<FilterEditPopupDefinitionProps> = {
  config: {
    type: Object as PropType<Group>,
    required: true
  },
  dictionaries: {
    type: Object as PropType<GroupsDictionaries>,
    required: true
  },
  definition: {
    type: Object as PropType<FilterParams>,
    required: true
  },
  index: {
    type: Number,
    required: true
  },

  hints: {
    type: Array as PropType<Hint[]>,
    required: false,
    default: () => []
  },

  loading: {
    type: Boolean,
    required: false,
    default: false
  }
}

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const useFilterEditPopupDefinition = (
  props: FilterEditPopupDefinitionProps,
  internalInstance: ComponentInternalInstance | null
): UseFilterEditPopupDefinition => {
  const { config, definition } = props

  if (internalInstance === null) {
    throw new Error(
      'useFilterEditPopupDefinition(): FATAL ERROR! Failed to resolve the component instance!')
  }

  const { emit, proxy } = internalInstance

  const definitionOperator = ref<FilterOperator | undefined>(definition.operator)
  const value = ref<string | number | boolean>(definition.value)
  const dictionaries = toRef(props, 'dictionaries')

  const haveSelectOperator = computed<boolean>(() => {
    return !(config.type === FilterType.Dictionary || config.type === FilterType.Typeahead)
  })

  const isDate = computed<boolean>(() => {
    return config.type === FilterType.Date
  })

  const isEnumerable = computed<boolean>(() => {
    return config.type === FilterType.Dictionary
  })

  const isSearchable = computed<boolean>(() => {
    return config.type === FilterType.Typeahead
  })

  const dictionariesOptions = () => {
    return buildDictionaryOptions(dictionaries.value, config.key).map(o => {
      return {
        label: proxy.$t(o.label).toString(),
        value: o.value
      }
    })
  }

  const selected = (): Hint[] => {
    if (!value.value) {
      return []
    }

    return props.hints.filter(h => h.value === value.value)
  }

  const operatorsOptions = computed<DashmixSelectItem[]>(() => {
    return buildOperatorsOptions(config.type).map(o => {
      return {
        label: proxy.$t(o.label).toString(),
        value: o.value
      }
    })
  })

  const onRemove = () => {
    emit('onRemove')
  }

  const onClear = () => {
    emit('search', {})
  }

  const onDelete = (selectedHint: Hint) => {
    value.value = ''
    emit('deleteHint', selectedHint)
  }

  const onSelect = (selectedHint: Hint) => {
    value.value = selectedHint.value as string | number | boolean
    emit('setHint', selectedHint)
  }

  const onSearch = (searchedParams: string) => {
    emit('search', { q: searchedParams })
  }

  const onInputChange = debounce((newValue: string | number | boolean) => {
    onInputChange.cancel()

    emit('onChange', { value: newValue })
  }, 500)

  watch(() => value.value, onInputChange)

  watch(() => definitionOperator.value, (newDefinitionOperator) => {
    emit('onChange', { operator: newDefinitionOperator })
  })

  return {
    dictionariesOptions,
    definitionOperator,
    isDate,
    isEnumerable,
    isSearchable,
    haveSelectOperator,
    operatorsOptions,
    onRemove,
    onSearch,
    onSelect,
    onDelete,
    onClear,
    value,
    selected
  }
}
