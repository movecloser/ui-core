// Copyright © 2021 Move Closer

import { computed, PropType, SetupContext, toRef } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import { getAbstractInputControlProps } from '../../../../../abstract'
import { useSyncModel } from '../../../../../composables'

import {
  DashmixDateTimePickerProps,
  DateTimePickerSteps,
  DateTimePickerType,
  DisabledDateCallback
} from './DateTimePicker.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export const dashmixDateTimePickerProps: ComponentObjectPropsOptions<DashmixDateTimePickerProps> = {
  ...getAbstractInputControlProps<string>(),

  autocomplete: {
    type: String,
    required: false,
    default: 'off'
  },
  defaultValue: {
    type: String,
    required: false
  },
  disabledDate: {
    type: Function as PropType<DisabledDateCallback>,
    required: false
  },
  format: {
    type: String,
    required: false
  },
  pickerType: {
    type: String as PropType<DateTimePickerType>,
    required: false,
    default: () => DateTimePickerType.Date
  },
  range: {
    type: Boolean,
    required: false,
    default: false
  },
  showSecond: {
    type: Boolean,
    required: false,
    default: false
  },
  steps: {
    type: Object as PropType<DateTimePickerSteps>,
    required: false,
    default: () => ({ hour: 1, minute: 10, second: 10 })
  },
  showWeekNumber: {
    type: Boolean,
    default: false,
    required: false
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function useDashmixDateTimePicker (props: DashmixDateTimePickerProps, ctx: SetupContext) {
  const value = useSyncModel(toRef(props, 'model'), ctx)
  const stepsSetup = computed(() => {
    return {
      hourStep: props.steps.hour || 1,
      minuteStep: props.steps.minute || 10,
      secondStep: props.steps.second || 10
    }
  })

  return { stepsSetup, value }
}
