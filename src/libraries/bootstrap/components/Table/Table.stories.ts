// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'
import { getTemplateBase } from '../../storybook'

import { BootstrapTable } from './Table'
import { TableProps } from './Table.contracts'

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core/Bootstrap/Table',
  component: BootstrapTable
}
export default meta

const Template: Story<TableProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),

  components: { BootstrapTable },
  template: '<BootstrapTable v-bind="$props" />'
})

export const Table = Template.bind({})
Table.args = {
  tempRow: {},
  head: [
    {
      key: 'position',
      label: 'Stanowisko'
    },
    {
      key: 'department',
      label: 'Dział'
    },
    {
      key: 'place',
      label: 'Miejsce pracy'
    },
    {
      key: 'seeMore',
      label: '---'
    }
  ],
  items: [
    {
      position: 'Ekspert',
      department: '12321',
      place: 'WWa'
    }
  ]
}
