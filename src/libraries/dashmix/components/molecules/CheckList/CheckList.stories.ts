// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { SizeMap } from '../../../../../composables'
import { DashmixTheme } from '../../../contracts'

import { DashmixCheckList } from './CheckList'
import { DashmixCheckListProps } from './CheckList.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / CheckList',
  component: DashmixCheckList
}
export default meta

const Template: Story<DashmixCheckListProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  data () {
    return {
      selected: [],
      single: ''
    }
  },
  computed: {
    value: {
      get () {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        return args.multiple ? this.selected : this.single
      },
      set (value: any) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        args.multiple ? this.selected = value : this.single = value
      }
    }
  },

  template: `
    <div>
    <DsCheck name="checkbox" :model.sync="value"
             v-bind="{ disabled, options, multiple, size, theme }" />
    <hr class="mt-5">
    <code class="small">Current value: "{{ multiple ? selected : value }}"</code>
    </div>
  `
})

const defaultArgs = {
  disabled: false,
  multiple: true,
  options: [
    {
      label: 'Check me if you like',
      value: 'first'
    }, {
      label: 'Don\'t check me',
      value: 'second'
    }
  ],
  size: SizeMap.Large,
  theme: DashmixTheme.Primary
}

/**
 * Checkbox.
 */
export const Checkbox = Template.bind({})
Checkbox.args = {
  ...defaultArgs
}
