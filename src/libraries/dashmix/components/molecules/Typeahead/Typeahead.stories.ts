// Copyright © 2021 Move Closer

import faker from 'faker'

import { Meta, Story } from '@storybook/vue'

import { SizeMap } from '../../../../../composables'
import { DashmixTheme } from '../../../contracts'

import { DashmixBadgeShape, DashmixBadgeVariantMap } from '../../atoms'

import { DashmixTypeahead } from './Typeahead'
import { Hint, TypeaheadProps } from './Typeahead.contracts'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Typeahead',
  component: DashmixTypeahead,
  argTypes: {
    shape: {
      control: {
        type: 'select',
        options: DashmixBadgeShape
      }
    },
    badgeTheme: {
      control: {
        type: 'select',
        options: DashmixTheme
      }
    },
    variant: {
      control: {
        type: 'select',
        options: DashmixBadgeVariantMap
      }
    },
    size: {
      control: {
        type: 'select',
        options: SizeMap
      }
    }
  }
}
export default meta

const defaultArgs = {
  badgeMaxLength: 30,
  badgeTheme: DashmixTheme.Primary,
  badgeVariant: DashmixBadgeVariantMap.Default,
  clearable: false,
  disable: false,
  error: false,
  hints: [
    {
      label: faker.lorem.word(),
      value: faker.lorem.word()
    },
    {
      label: faker.lorem.word(),
      value: faker.lorem.word(),
      notClickable: true
    },
    {
      label: faker.lorem.word(),
      value: faker.lorem.word()
    }
  ],
  isMulti: true,
  loading: false,
  name: 'typeahead',
  noResults: 'no results',
  newResult: 'new Result',
  placeholder: 'type here',
  taggable: true,
  size: SizeMap.Medium,
  showSelection: true,
  useDebounce: false
}

/**
 * Default.
 */
const typeahead: Story<TypeaheadProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  data () {
    return {
      selected: []
    }
  },

  methods: {
    onSelect (selected: Hint) {
      console.debug('selected:', selected)
    },
    onSearch (query: string) {
      console.debug('search:', query)
    }
  },

  template: `
    <DsTypeahead v-bind="$props" @selected="onSelect" @searched="onSearch" />
  `
})
export const Typeahead = typeahead.bind({})
Typeahead.args = defaultArgs
