// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { SortDirectionMap, AbstractTableProps } from '../../../../../abstract/components/Table'

import { DashmixTable } from './Table'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Table',
  component: DashmixTable
}
export default meta

const Template: Story<AbstractTableProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      selected: [],
      allSelected: false,
      sortedBy: {
        direction: SortDirectionMap.Asc,
        field: 'title'
      }
    }
  },
  methods: {
    log (event) {
      console.log(event)
    },
    sort (field, direction) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.sortedBy = {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        direction: direction === 'asc' || this.sortedBy.direction === 'desc' ? SortDirectionMap.Asc
          : SortDirectionMap.Desc,
        field
      }
    }
  },
  template: `
    <div>
    <DsTable v-bind="$props" :sortedBy="sortedBy" @sortBy="sort"
             @selected="event => { selected = event.selected; allSelected = event.allSelected}"
             @do="log" />

    <p>Selected: {{ selected }}</p>
    <p>Are all selected: {{ allSelected }}</p>
    <p>{{ sortedBy }}</p>
    </div>
  `
})

export const Table = Template.bind({})
Table.args = {
  actions: [
    {
      label: 'Podgląd',
      icon: 'eye',
      guard: (data: any) => {
        return data.status === 'active'
      },
      action: 'Podgląd'
    },
    {
      label: 'Edytuj',
      icon: 'pen',
      action: 'Edytuj'
    },
    {
      label: 'Opublikuj',
      icon: 'trash',
      action: 'Opublikuj'
    },
    {
      label: 'Usuń',
      icon: 'trash',
      action: 'Usuń',
      theme: 'danger'
    }
  ],

  head: [
    {
      column: 'title',
      label: 'Tytuł',
      sortable: true,
      isSorted: false,
      width: '1.5fr'
    },
    {
      column: 'author',
      label: 'Autor',
      sortable: true,
      isSorted: false
    },
    {
      column: 'date',
      label: 'Data publikacji',
      sortable: true,
      isSorted: false
    },
    {
      column: 'status',
      label: 'Status',
      sortable: true,
      isSorted: true
    }
  ],

  rows: [
    {
      id: '0',
      selectable: true,
      data: {
        title: 'asdasdtytuł',
        author: 'asdasdauthor',
        date: 'dataa',
        status: 'active'
      }
    },
    {
      id: '1',
      selectable: true,
      data: {
        title: 'asdasdtytuł',
        author: 'asdasdauthor',
        date: 'dataa',
        status: 'active'
      }
    },
    {
      id: '2',
      selectable: false,
      data: {
        title: 'asdasdtytuł',
        author: 'asdasdauthor',
        date: 'dataa',
        status: 'active'
      }
    },
    {
      id: '3',
      selectable: true,
      data: {
        title: 'asdasdtytuł',
        author: 'asdasdauthor',
        date: 'dataa',
        status: 'inactive'
      }
    }
  ],

  hideLastBorder: false,
  isLoading: false,
  showActions: true,
  showSelection: true
}
