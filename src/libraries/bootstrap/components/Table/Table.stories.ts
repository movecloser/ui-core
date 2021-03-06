// Copyright © 2021 Move Closer

import * as faker from 'faker'
import { Meta, Story } from '@storybook/vue'

import { getTemplateBase } from '../../storybook'

import { BootstrapTable } from './Table'
import { TableItem, TableProps } from './Table.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Bootstrap / Table',
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
        // @ts-expect-error - Correct TS annotation would require too much effort.
        console.debug(this.item.position)
      }
    },
    template: '<button @click="onClick()">See more</button>'
  }
}))

export const Table = Template.bind({})
Table.args = {
  fields: [
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
