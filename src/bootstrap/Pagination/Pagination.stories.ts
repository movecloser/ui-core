// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { getTemplateBase } from '../_storybook/template-base'

import { BootstrapPagination } from './Pagination'
// noinspection ES6PreferShortImport
import { BootstrapPaginationProps } from './Pagination.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'DSL/Bootstrap/Pagination',
  component: BootstrapPagination
}
export default meta

const Template: Story<BootstrapPaginationProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),

  data () {
    return {
      currentPage: 1
    }
  },

  template: `
    <div>
      <UiPagination v-bind="{ ...$props, currentPage }" @change="currentPage = $event" />
      <hr>
      <small>Current page: <code>{{ currentPage }}</code></small>
    </div>
  `
})
export const Pagination = Template.bind({})
Pagination.args = {
  showDirectionButtons: true,
  totalPages: 10,
  totalVisible: 5
}
