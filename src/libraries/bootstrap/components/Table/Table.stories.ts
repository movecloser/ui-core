// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { BootstrapTable } from './Table'
import { TableProps } from './Table.contracts'
import { getTemplateBase } from '../../storybook'

const meta: Meta = {
  title: 'Ui Core/Bootstrap/Table',
  component: BootstrapTable
}
export default meta

const Template: Story<TableProps> = (args, { argsTypes }) => ({
  props: Object.keys(argsTypes),

  component: { BootstrapTable },
  template: '<BootstrapTable v-bind="$props" />'
})

export const Table = Template.bind({})
Table.args = {
  head: [
    {
      column: 'title',
      label: 'Tytuł',
      width: '1.5fr'
    }
  ],
  isLoading: false
}
