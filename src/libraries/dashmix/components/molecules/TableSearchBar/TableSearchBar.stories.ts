// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { DashmixTableSearchBar } from './TableSearchBar'
import { DashmixTableSearchBarProps } from './TableSearchBar.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Table/Table Search Bar',
  component: DashmixTableSearchBar
}
export default meta

const Template: Story<DashmixTableSearchBarProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  methods: {
    log (event) {
      console.log(event)
    }
  },
  template: `
    <DsTableSearchBar v-bind="$props" @bulk="log" />
  `
})

export const TableSearchBar = Template.bind({})
TableSearchBar.args = {
  actions: [
    {
      label: 'Podgląd',
      isBulkAction: true,
      icon: 'Eye',
      action: 'preview'
    },
    {
      label: 'Edytuj',
      isBulkAction: true,
      icon: 'Pen',
      action: 'edit'
    },
    {
      label: 'Opublikuj',
      isBulkAction: true,
      icon: 'Trash',
      action: 'publish'
    },
    {
      label: 'Usuń',
      isBulkAction: true,
      icon: 'Trash',
      action: 'delete'
    }
  ],
  isProcessing: true,
  searchPlaceholder: 'Wyszukaj',
  selected: ['0', '3', '18']
}
