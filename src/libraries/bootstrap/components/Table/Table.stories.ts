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

const Template: Story<TableProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),

  components: { BootstrapTable },
  template: '<BootstrapTable :head="head"/>'
})

export const Table = Template.bind({})
Table.args = {
  titles: [
    { key: 'position', label: 'Stanowisko' },
    { key: 'department', label: 'Dział' },
    { key: 'place', label: 'Miejsce pracy' }
  ],
  items: [
    { name: 'Ekspert ds. Rynku OZE i Transformacji Energetycznej', departmentName: 'IT / Security', placeName: 'Warszawa' },
    { name: 'Ekspert ds. Zrównoważonego Rozwoju', departmentName: 'Finanse', placeName: 'Kraków' },
    { name: 'Ekspert ds. Rynku OZE i Transformacji Energetycznej', departmentName: 'IT / Security', placeName: 'Warszawa' },
    { name: 'Ekspert ds. Zrównoważonego Rozwoju', departmentName: 'Finanse', placeName: 'Kraków' }
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
