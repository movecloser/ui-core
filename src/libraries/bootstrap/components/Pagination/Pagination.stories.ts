// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { getTemplateBase } from '../../storybook'

import { BootstrapPagination } from './Pagination'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Bootstrap / Pagination',
  component: BootstrapPagination
}
export default meta

const Template: Story = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapPagination },
  data () {
    return {
      currentPage: 1
    }
  },
  methods: {
    onChange (currentPage) {
      // @ts-expect-error - Correct TS annotation would require too much effort.
      this.currentPage = currentPage
    }
  },
  template: `
    <div>
      <code class="small">:model.sync</code>
      <BootstrapPagination v-bind="$props" :model.sync="currentPage" />

      <code class="small">:model & @update:model</code>
      <BootstrapPagination v-bind="$props" :model="currentPage" @update:model="onChange" />

      <hr>
      <p>Current page: <code>{{ currentPage }}</code></p>
    </div>
  `
})

export const Pagination = Template.bind({})
Pagination.args = {
  perPage: 10,
  totalRows: 100
}
