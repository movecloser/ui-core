// Copyright © 2021 Move Closer

import { computed, onMounted, PropType, Ref, ref, SetupContext, watch } from '@vue/composition-api'
import { Container, Filter, FilterParams } from '@movecloser/front-core'

import {
  FilterBadgeProps,
  FilterType,
  Group,
  GroupsDictionaries,
  UseFilterBadge
} from '../Filters.contracts'
import { buildDefinitionsSet, printableValue } from '../Filters.helpers'

import { ComponentObjectPropsOptions } from '../../../../../../contracts'
import { Hint } from '../../Typeahead'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const filterBadgeProps: ComponentObjectPropsOptions<FilterBadgeProps> = {
  config: {
    type: Object as PropType<Group>,
    required: true
  },

  container: {
    type: Object as PropType<Container>,
    required: false
  },

  dictionaries: {
    type: Object as PropType<GroupsDictionaries>,
    required: true
  },

  isNew: {
    type: Boolean,
    required: false,
    default: false
  },

  loading: {
    type: Boolean,
    required: false,
    default: false
  },

  field: {
    type: String,
    required: true
  },

  value: {
    type: [Object, Array, String, Boolean, Number] as PropType<Filter>,
    required: true
  }
}

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export function useFilterBadge (props: FilterBadgeProps, ctx: SetupContext): UseFilterBadge {
  const { config, field, value } = props

  const { emit } = ctx

  const copiedValue: Ref<Filter> = ref(value)
  const dictionaries = ref<GroupsDictionaries>(props.dictionaries)
  const hints = ref<Hint[]>([])

  const resolvedParams: Ref<FilterParams[]> = computed(() => {
    return [...buildDefinitionsSet(copiedValue.value, config.type)]
  })

  const deleteHint = (hint: Hint) => {
    hints.value = hints.value.filter(h => h.value !== hint.value)
  }

  const removeFilter = () => {
    emit('onRemove', field)
  }

  const toPrint = (filter: FilterParams) => computed(() => {
    if (config.type === FilterType.Date) {
      const date = new Date(`${filter.value}`)
      return date.toLocaleDateString('pl-PL')
    }

    if (config.type === FilterType.Typeahead) {
      const hint = hints.value.filter(h => h.value === filter.value)[0]

      return hint ? hint.label : '--'
    }
    return printableValue(filter.value, config, dictionaries.value)
  })

  watch(() => props.value, (newValue) => {
    copiedValue.value = newValue
  })

  const submitFilterParams = () => {
    const valueCandidate = ((Array.isArray(copiedValue.value) ? copiedValue.value
      : [copiedValue.value]) as FilterParams[])
      .filter((v: FilterParams) => {
        return v && String(v.value).length > 0
      })

    if (valueCandidate.length) {
      emit('onEdit', field, valueCandidate)
    }
  }

  const toggleEditMode = (open: () => void, close: () => void, isOpen: boolean) => {
    if (isOpen) {
      submitFilterParams()
      close()
      return
    }
    open()
  }

  const setHint = (hint: Hint) => {
    hints.value.push(hint)
  }

  const setValue = (newValue: Filter) => {
    copiedValue.value = newValue
  }

  const onBadgeClick = (close: () => void, isOpen: boolean) => {
    if (isOpen) {
      close()
      submitFilterParams()
      return
    }

    removeFilter()
  }

  onMounted(() => {
    if (!props.container) {
      return
    }

    const idToLoad: FilterParams['value'][] = resolvedParams.value.map(filter => {
      return filter.value
    })

    if (idToLoad.length === 0) {
      return
    }

    if (Object.prototype.hasOwnProperty.call(props.config, 'dictionaryLoader') &&
      typeof props.config.dictionaryLoader !== 'undefined') {
      props.config.dictionaryLoader(props.container, { id: 'in:' + idToLoad.join('|') })
        .then(response => {
          hints.value = [...response]
        })
    }
  })

  return {
    copiedValue,
    onBadgeClick,
    resolvedParams,
    toggleEditMode,
    setValue,
    hints,
    deleteHint,
    setHint,
    toPrint
  }
}
