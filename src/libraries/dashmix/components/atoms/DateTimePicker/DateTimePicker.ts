// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'
import DatePicker from 'vue2-datepicker/index'
import 'vue2-datepicker/locale/pl'

import { DashmixDateTimePickerProps } from './DateTimePicker.contracts'
import { dashmixDateTimePickerProps, useDashmixDateTimePicker } from './DateTimePicker.hooks'

export const DashmixDateTimePicker = defineComponent({
  name: 'DashmixDateTimePicker',
  components: { DatePicker },
  props: dashmixDateTimePickerProps,

  setup (props: DashmixDateTimePickerProps, ctx: SetupContext) {
    return useDashmixDateTimePicker(props, ctx)
  },

  template: `
    <DatePicker v-model="value" v-on="$listeners" v-bind="{
      autocomplete, autofocus, defaultValue ,disabled, disabledDate,  format, placeholder, ...stepsSetup,range: range,
      readonly, showSecond: showSecond, type: pickerType, valueType: 'format', showWeekNumber
    }" />
  `
})
