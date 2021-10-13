// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { DashmixPagination } from './Pagination'
import { DashmixPaginationProps } from './Pagination.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Pagination',
  component: DashmixPagination
}
export default meta

const Template: Story<DashmixPaginationProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  data () {
    return {
      currentPage: 1,
      perPage: 25
    }
  },

  template: `
    <DsPagination :currentPage.sync="currentPage" :perPage.sync="perPage" v-bind="{ itemsTotal }" />
  `
})

export const Pagination = Template.bind({})
Pagination.args = {
  itemsTotal: 256
}
