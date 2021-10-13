// Copyright © 2021 Move Closer

import { PropType, ref, Ref, SetupContext, watch } from '@vue/composition-api'
import { ConjunctionOperator, Filter, FilterParams } from '@movecloser/front-core'

import { ComponentObjectPropsOptions } from '../../../../../../contracts'

import { Hint } from '../../Typeahead'

import {
  FilterEditPopupProps,
  Group,
  GroupsDictionaries,
  UseFilterEditPopup
} from '../Filters.contracts'
import {
  buildConjunctionOptions,
  buildDefinitionsSet, buildDefinitionTemplate,
  resolveConjunctionOperator
} from '../Filters.helpers'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const useFilterEditPopupProps: ComponentObjectPropsOptions<FilterEditPopupProps> = {
  config: {
    type: Object as PropType<Group>,
    required: true
  },
  dictionaries: {
    type: Object as PropType<GroupsDictionaries>,
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
  },

  value: {
    type: [Object, Array, String, Boolean, Number] as PropType<Filter>,
    required: true
  }
}

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const useFilterEditPopup = (
  props: FilterEditPopupProps,
  ctx: SetupContext
): UseFilterEditPopup => {
  const { value } = props

  const { emit } = ctx

  const definitions: Ref<FilterParams[]> = ref([...buildDefinitionsSet(value, props.config.type)])
  const conjunction: Ref<ConjunctionOperator> = ref(resolveConjunctionOperator(
    definitions.value,
    ConjunctionOperator.Or
  ))

  const conjunctionOptions = buildConjunctionOptions()

  watch(() => definitions.value, (newDefinitions) => {
    emit('setValue', newDefinitions)
  })

  watch(() => conjunction.value, (newConjunction) => {
    if (definitions.value.length > 1) {
      definitions.value = [...definitions.value].map((d: FilterParams, index: number) => {
        if (index > 0) {
          d.conjunction = newConjunction
        }

        return d
      })
    }
  })

  const addClearDefinition = () => {
    definitions.value = [...definitions.value, buildDefinitionTemplate(conjunction.value)]
  }

  const onDefinitionChange = (changed: FilterParams, index: number) => {
    definitions.value = definitions.value.map((d, id) => {
      if (id === index) {
        return { ...d, ...changed }
      }
      return d
    })
  }

  const onDefinitionRemove = (index: number) => {
    if (definitions.value.length > 1) {
      const set = [...definitions.value]
      set.splice(index, 1)
      definitions.value = set
    }
  }

  const setNewConjunction = (newConjunction: ConjunctionOperator) => {
    conjunction.value = newConjunction
  }

  return {
    addClearDefinition,
    conjunction,
    conjunctionOptions,
    definitions,
    onDefinitionChange,
    onDefinitionRemove,
    setNewConjunction
  }
}
