// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { SizeMap } from '../../../../../composables'

import { DashmixSelect } from './Select'
import { DashmixSelectProps } from './Select.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Select',
  component: DashmixSelect,
  argTypes: {
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
  autocomplete: 'off',
  clearable: true,
  disabled: false,
  loading: false,
  multiple: false,
  taggable: false,
  options: [
    {
      label: 'numero uno',
      value: 1
    },
    {
      label: 'wybierz mnie!',
      value: 2
    },
    {
      label: 'Hej :)',
      value: 3
    }
  ],
  placeholder: 'Lorem placeholder',
  searchable: true,
  size: SizeMap.Medium
}

/**
 * Default.
 */
const TDefault: Story<DashmixSelectProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  data () {
    return {
      model: null
    }
  },

  template: `
    <div>
    <DsSelect :model.sync="model" v-bind="$props" />
    <hr class="mt-5">
    <code class="small">Current value: "{{ model }}"</code>
    </div>
  `
})
export const Default = TDefault.bind({})
Default.args = defaultArgs

/**
 * Custom slots.
 */
const TCustomSlots: Story<DashmixSelectProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  data () {
    return {
      model: null
    }
  },

  template: `
    <DsSelect :model.sync="model" v-bind="$props">
    <template v-slot:default>
      <img style="width: 50px" :src="slotOptionImg" alt="" />
    </template>

    <template v-slot:no-options>
        <span slot="no-options">
          <img style="width: 50px" :src="slotNoOptionImg" alt="" />
        </span>
    </template>
    </DsSelect>
  `
})
export const CustomSlots = TCustomSlots.bind({})
CustomSlots.args = {
  ...defaultArgs,
  slotNoOptionImg: 'https://www.gstatic.com/webp/gallery/1.jpg',
  slotOptionImg: 'https://www.gstatic.com/webp/gallery/1.jpg'
}
