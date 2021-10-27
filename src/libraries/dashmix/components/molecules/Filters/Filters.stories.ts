// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { DashmixFilters } from './Filters'
import { FiltersProps, FilterType } from './Filters.contracts'
import { defaultIgnoredQueryParams } from './Filters.hook'
import { Container } from '@movecloser/front-core'
import { getDashmixTemplateBase } from '../../../storybook/template-base'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Filters',
  component: DashmixFilters
}
export default meta


const defaultArgs = {
  container: new Container(),
  config: {
    groups: {
      createdAt: { label: 'Data utworzenia', key: 'createdAt', type: FilterType.Date },
      addedBy: { label: 'Kto dodał', key: 'addedBy', type: FilterType.String },
      author: { label: 'Autor', key: 'author', type: FilterType.String }
    },
    ignore: [...defaultIgnoredQueryParams],
    override: { page: '1' },
    leave: ['perPage']
  },
  query: {}
}

/**
 * Default.
 */
const filters: Story<FiltersProps> = (args, { argTypes }) => ({
  ...getDashmixTemplateBase(argTypes),
  props: Object.keys(argTypes),
  template: `
    <DsFilters v-bind="$props" />
  `
})
export const Filters = filters.bind({})
Filters.args = defaultArgs
