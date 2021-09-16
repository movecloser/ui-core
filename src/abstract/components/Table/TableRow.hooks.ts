// Copyright © 2021 Move Closer

import { computed, PropType, SetupContext, toRef } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../contracts'
import { useSyncModel } from '../../../composables'

import { TableFakeRowProps, TableHead, TableRowActions, TableRowProps, UseTableRowProvides } from './Table.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const tableFakeRowProps: ComponentObjectPropsOptions<TableFakeRowProps> = {
  gridColumns: {
    type: String,
    required: true
  },

  head: {
    type: Array as PropType<TableHead>,
    required: true
  },

  isLoading: {
    type: Boolean,
    required: false,
    default: false
  },

  rowsCount: {
    type: Number,
    required: false,
    default: 1
  },

  showSelection: {
    type: Boolean,
    required: false,
    default: false
  }
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const tableRowProps: ComponentObjectPropsOptions<TableRowProps> = {
  actions: {
    type: Array as PropType<TableRowActions>,
    required: false,
    default: () => []
  },

  gridColumns: {
    type: String,
    required: true
  },

  index: {
    type: Number,
    required: true
  },

  row: {
    type: Object,
    required: true
  },

  selectedRows: {
    type: Array,
    required: false,
    default: () => []
  },

  showActions: {
    type: Boolean,
    required: false,
    default: false
  },

  showSelection: {
    type: Boolean,
    required: false,
    default: false
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useTableRow = (props: TableRowProps, ctx: SetupContext): UseTableRowProvides => {
  const selectedRows = toRef(props, 'selectedRows')

  const isSelected = computed<boolean>(() => selectedRows.value.includes(props.row.id))
  const selected = useSyncModel(selectedRows, ctx, 'selectedRows')

  const filteredActions = computed(() => {
    return props.actions.filter(a => {
      return typeof a.guard !== 'function' || a.guard(props.row.data)
    })
  })

  return { filteredActions, isSelected, selected }
}
