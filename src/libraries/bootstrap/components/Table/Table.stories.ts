// Copyright © 2021 Move Closer

import * as faker from 'faker'
import { Meta, Story } from '@storybook/vue'

import { getTemplateBase } from '../../storybook'

import { BootstrapTable } from './Table'
import { TableItem, TableProps } from './Table.contracts'

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

const items: TableItem[] = Array.from(Array(10)).map(() => ({
  position: faker.name.jobTitle(),
  department: faker.name.jobType(),
  place: faker.address.cityName(),
  seeMore: {
    props: ['item'],
    methods: {
      onClick () {
        alert(this.item.position)
      }
    },
    template: `
      <button class="border-0 bg-primary text-white" @click="onClick()">Zobacz więcej</button>
    `
  }
}))

export const Table = Template.bind({})
Table.args = {
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
  items
}
