// Copyright © 2021 Move Closer

import {
  computed,
  onMounted,
  PropType,
  Ref,
  ref,
  SetupContext,
  toRef,
  watch
} from '@vue/composition-api'
import { Container, QueryParams, FiltersConfig } from '@movecloser/front-core'
import {
  parseQueryParams,
  composeQueryParams
} from '@movecloser/front-core/lib/services/filter-parser'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import { DropdownItem } from '../../../../../abstract/components/Dropdown'

import { composeLeaveParams } from './Filters.helpers'
import {
  FiltersConfig as Config,
  FiltersProps,
  GroupDictionary,
  GroupsDictionaries,
  UseFiltersProvides
} from './Filters.contracts'


export const defaultIgnoredQueryParams: string[] = ['q', 'page', 'perPage', 'sort']

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const useFiltersProps: ComponentObjectPropsOptions<FiltersProps> = {
  container: {
    type: Object as PropType<Container>,
    required: false
  },
  config: {
    type: Object as PropType<Config>,
    required: true
  },
  query: {
    type: Object as PropType<QueryParams>,
    required: true
  }
}

/**
 * @author Olga Milczek
 */
export function useFilters (props: FiltersProps, ctx: SetupContext): UseFiltersProvides {
  const { container } = props

  const { emit } = ctx

  const filters: Ref<FiltersConfig> = ref({})

  const loading: Ref<boolean> = ref(false)
  const dictionaries: Ref<GroupsDictionaries> = ref({})
  const canRemoveAll = computed<boolean>(() => {
    return Object.keys(filters.value).length > 0
  })
  const query = toRef(props, 'query')

  const clearFilters = () => {
    emit('setQuery', { ...composeLeaveParams(query.value, props.config.leave) })
  }

  const isFromQuery = (filterKey: string) => {
    return !Object.keys(query.value).includes(filterKey)
  }

  const onEdit = (field: string, value: any) => {
    const actualState: string = JSON.stringify(filters)
    const updatedFilters: FiltersConfig = filters.value
    updatedFilters[field] = value

    if (props.config.leave) {
      composeLeaveParams(query.value, props.config.leave)
    }

    if (actualState !== JSON.stringify(updatedFilters)) {
      emit('setQuery', {
        ...composeLeaveParams(query.value, props.config.leave),
        ...composeQueryParams(updatedFilters),
        ...props.config.override
      })
    }
  }

  const onRemove = (field: string) => {
    const newFilters = filters.value
    delete newFilters[field]

    filters.value = { ...newFilters }

    emit('setQuery', {
      ...composeLeaveParams(query.value, props.config.leave),
      ...composeQueryParams(filters.value),
      ...props.config.override
    })
  }

  const onFilterApply = (field: string) => {
    filters.value = { ...filters.value, [field]: '' }
  }

  const setQueryToFilters = (newQuery: QueryParams) => {
    const filteredQuery: QueryParams = {}

    for (const key of Object.keys(newQuery)) {
      if (props.config.ignore.includes(key)) continue

      filteredQuery[key] = newQuery[key]
    }
    filters.value = parseQueryParams(filteredQuery)
  }

  const filtersItems = (): DropdownItem[] => {
    return Object.values(props.config.groups).map(g => {
      return {
        type: 'item',
        label: g.label,
        onClick: () => onFilterApply(g.key)
      }
    })
  }

  const shouldRender = computed(() => Object.keys(props.config.groups).length > 0)

  const getDicts = (config: Config) => {
    loading.value = true

    const promises: Promise<void>[] = []

    for (const group of Object.values(config.groups)) {
      if (Object.prototype.hasOwnProperty.call(
        group,
        'dictionary'
      ) && Array.isArray(group.dictionary)) {
        dictionaries.value[group.key] = group.dictionary
      }
      if (
        container !== undefined &&
        Object.prototype.hasOwnProperty.call(group, 'dictionaryLoader') &&
        typeof group.dictionaryLoader !== 'undefined'
      ) {
        promises.push(
          group.dictionaryLoader(container).then((loaded: GroupDictionary) => {
            dictionaries.value[group.key] = loaded
          })
        )
      }
    }

    if (promises.length) {
      const promiseLoad = Promise.all(promises).then(() => {
        loading.value = false
        dictionaries.value = { ...dictionaries.value }
      })

      promiseLoad.catch(e => console.debug(e))
    } else {
      loading.value = false
    }

    setQueryToFilters(query.value)
  }

  const loadDict = (groupKey: string, query: QueryParams) => {
    loading.value = true
    if (typeof container === 'undefined') {
      return
    }

    const group = props.config.groups[groupKey]

    if (!group || !Object.prototype.hasOwnProperty.call(group, 'dictionaryLoader') ||
      typeof group.dictionaryLoader === 'undefined'
    ) {
      return
    }

    group.dictionaryLoader(container, query).then((loaded: GroupDictionary) => {
      dictionaries.value = { ...dictionaries.value, [group.key]: loaded }
      loading.value = false
    })
  }

  watch(() => props.query, (newQuery) => {
    setQueryToFilters(newQuery)
  })

  watch(() => props.config, (newConfig) => {
    getDicts(newConfig)
  })

  onMounted(() => {
    getDicts(props.config)
  })

  return {
    canRemoveAll,
    clearFilters,
    dictionaries,
    isFromQuery,
    filters,
    filtersItems,
    loading,
    loadDict,
    onEdit,
    onFilterApply,
    onRemove,
    shouldRender
  }
}
