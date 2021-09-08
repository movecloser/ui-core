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
  ...getTemplateBase(argsTypes),

  component: { BootstrapTable },
  template: '<BootstrapTable v-bind="$props" />'
})

export const Table = Template.bind({})
Table.args = {
  items: [
    { name: { first: 'John', last: 'Doe' }, sex: 'Male', age: 42 },
    { name: { first: 'Jane', last: 'Doe' }, sex: 'Female', age: 36 },
    { name: { first: 'Rubin', last: 'Kincade' }, sex: 'Male', age: 73 },
    { name: { first: 'Shirley', last: 'Partridge' }, sex: 'Female', age: 62 }
  ],
  fields: [
    'index',
    { key: 'name', label: 'Full Name' },
    'age',
    'sex',
    { key: 'nameage', label: 'First name and age' }
  ],
  head: [
    {
      column: 'title',
      label: 'Tytuł',
      width: '1.5fr'
    }
  ],
  isLoading: false
}
