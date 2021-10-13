// Copyright © 2021 Move Closer

import { computed, PropType, ref, SetupContext } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'

import {
  DashmixTableSearchBarProps,
  TableSearchBarAction,
  UseDashmixTableSearchBarProvides
} from './TableSearchBar.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const dashmixTableSearchBarProps: ComponentObjectPropsOptions<DashmixTableSearchBarProps> = {
  /**
   * Actions performable on rows.
   */
  actions: {
    type: Array as PropType<TableSearchBarAction[]>,
    required: false
  },

  /**
   * Determines whether there are any background processes currntly active.
   */
  isProcessing: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * Search input placeholder.
   */
  searchPlaceholder: {
    type: String,
    required: false,
    default: ''
  },

  /**
   * Search input value.
   */
  searchValue: {
    type: String,
    required: false,
    default: ''
  },

  /**
   * Selected rows.
   */
  selected: {
    type: Array,
    required: false,
    default: () => []
  }
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const useDashmixTableSearchBar = (
  props: DashmixTableSearchBarProps,
  ctx: SetupContext
): UseDashmixTableSearchBarProvides => {
  const confirmAction = ref({})
  const showConfirmModal = ref(false)
  const showFilterModal = ref(false)

  const bulkActions = computed(() => {
    return props.actions ? props.actions.filter(action => action.isBulkAction) : []
  })

  const searchModel = computed<string>({
    get () {
      return props.searchValue
    },
    set (value): void {
      ctx.emit('search', value)
    }
  })

  return { bulkActions, confirmAction, searchModel, showConfirmModal, showFilterModal }
}
