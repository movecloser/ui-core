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
    { key: 'position', label: 'Stanowisko' },
    { key: 'department', label: 'Dział' },
    { key: 'place', label: 'Miejsce pracy' },
    { key: 'seeMore', label: '---' }
  ],
  items: [
    [
      { key: 'position', value: 'Ekspert ds. Rynku OZE i Transformacji Energetycznej' },
      { key: 'department', value: 'IT / Security' },
      { key: 'place', value: ' Warszawa' }
    ], [
      { key: 'position', value: 'Ekspert ds. Zrównoważonego Rozwoju' },
      { key: 'department', value: 'Finanse' },
      { key: 'place', value: ' Kraków' }
    ], [
      { key: 'position', value: 'Ekspert ds. Rynku OZE i Transformacji Energetycznej' },
      { key: 'department', value: 'IT / Security' },
      { key: 'place', value: ' Warszawa' }
    ], [
      { key: 'position', value: 'Ekspert ds. Zrównoważonego Rozwoju' },
      { key: 'department', value: 'Finanse' },
      { key: 'place', value: ' Kraków' }
    ]
  ]
}
