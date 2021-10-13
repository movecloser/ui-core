// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { DashmixDateTimePicker } from './DateTimePicker'
import { DashmixDateTimePickerProps, DateTimePickerType } from './DateTimePicker.contracts'

import { disabledAfterToday, disabledBeforeToday } from './DateTimePicker.helpers'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Date Time Picker',
  component: DashmixDateTimePicker
}
export default meta

const Template: Story<DashmixDateTimePickerProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  data () {
    return {
      model: ''
    }
  },

  methods: { disabledBeforeToday, disabledAfterToday },

  template: `
    <div>
    <DsDateTimePicker name="date" :model.sync="model" v-bind="$props" />
    <hr class="mt-5">
    <code class="small">Current value: "{{ model }}"</code>
    </div>
  `
})

const defaultArgs = {
  autocomplete: 'off',
  autofocus: false,
  disabled: false,
  steps: {
    hour: 1,
    minute: 10,
    second: 1
  },
  showSecond: false,
  placeholder: 'wybierz datę',
  readonly: false,
  showWeekNumber: false
}

/**
 * Date.
 */
export const DatePicker = Template.bind({})
DatePicker.args = {
  ...defaultArgs,
  pickerType: DateTimePickerType.Date
}

/**
 * Time.
 */
export const Time = Template.bind({})
Time.args = {
  ...defaultArgs,
  pickerType: DateTimePickerType.Time
}

/**
 * DateTime.
 */
export const DateTime = Template.bind({})
DateTime.args = {
  ...defaultArgs,
  pickerType: DateTimePickerType.DateTime
}
