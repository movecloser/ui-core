// Copyright © 2021 Move Closer

import { computed, PropType, ref, SetupContext, toRefs, watch } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../contracts'

import {
  CurrentSorting,
  SortDirection,
  TableHead,
  TableHeadElement,
  TableProps,
  TableRowActions,
  TableRowElement,
  TableSelectionEvent, UseTableProvides
} from './Table.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const tableProps: ComponentObjectPropsOptions<TableProps> = {
  /**
   * Table actions
   */
  actions: {
    type: Array as PropType<TableRowActions>,
    required: false,
    default: () => []
  },

  /**
   * Table head row elements
   */
  head: {
    type: Array as PropType<TableHead>,
    required: true
  },

  /**
   * Hide last border in table
   */
  hideLastBorder: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * Triggers table loading state
   */
  isLoading: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * Number of rows that will display
   */
  numberOfRows: {
    type: Number,
    required: false,
    default: 25
  },

  /**
   * Table body row elements
   */
  rows: {
    type: Array as PropType<TableRowElement[]>,
    required: false,
    default: () => []
  },

  /**
   * Display column with actions
   */
  showActions: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * Display column made for selecting rows
   */
  showSelection: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * Defines what is table sorted by
   */
  sortedBy: {
    type: Object as PropType<CurrentSorting>,
    required: false
  }
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useTable = (props: TableProps, ctx: SetupContext): UseTableProvides => {
  const { head, isLoading, rows, showSelection, showActions, sortedBy } = toRefs(props)

  const bulkSelection = ref<boolean>(false)
  const selectedRows = ref<unknown[]>([])

  const gridColumns = computed<string>(() => {
    return (showSelection.value ? 'auto' : '') + head.value.reduceRight(
      // TODO - add responsive design to table - without hardcoded min-width.
      // WARNING - changing min-width 5rem will break RWD of tabel.
      (prev: string, headElement: TableHeadElement) => (
        ` minmax(${headElement.width ? (headElement.width.includes('px') || headElement.width.includes('em')
          ? headElement.width : '5rem') : '5rem'},` +
        ` ${headElement.width ? headElement.width : '1fr'})`
      ) + prev,
      `${showActions.value ? ' minmax(5rem, max-content)' : ''}`
    )
  })

  const isEmpty = computed<boolean>(() => {
    return !isLoading.value && rows.value.length === 0
  })

  const handleSort = (headElement: TableHeadElement, sortDirection?: SortDirection): void => {
    if (!sortDirection && sortedBy && sortedBy.value) {
      ctx.emit('sortBy', headElement.column)
      return
    }
    ctx.emit('sortBy', headElement.column, sortDirection)
  }

  watch(bulkSelection, (value: boolean) => {
    const selectableRows = rows.value.filter(r => r.selectable)

    selectedRows.value = value
      ? selectableRows.map(r => r.id)
      : (selectedRows.value.length < selectableRows.length ? selectedRows.value : [])
  })

  watch(selectedRows, () => {
    const selectableRows = rows.value.filter(r => r.selectable)

    if (!bulkSelection.value && selectedRows.value.length === selectableRows.length) {
      bulkSelection.value = true
    }

    if (bulkSelection.value && selectedRows.value.length < selectableRows.length) {
      bulkSelection.value = false
    }

    ctx.emit('selected', {
      allSelected: bulkSelection.value,
      selected: selectedRows.value
    } as TableSelectionEvent)
  })

  return { bulkSelection, gridColumns, handleSort, isEmpty, selectedRows }
}
