"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixDateTimePicker = exports.dashmixDateTimePickerProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const abstract_1 = require("../../../../../abstract");
const composables_1 = require("../../../../../composables");
const DateTimePicker_contracts_1 = require("./DateTimePicker.contracts");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
exports.dashmixDateTimePickerProps = {
    ...abstract_1.getAbstractInputControlProps(),
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
        type: Function,
        required: false
    },
    format: {
        type: String,
        required: false
    },
    pickerType: {
        type: String,
        required: false,
        default: () => DateTimePicker_contracts_1.DateTimePickerType.Date
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
        type: Object,
        required: false,
        default: () => ({ hour: 1, minute: 10, second: 10 })
    },
    showWeekNumber: {
        type: Boolean,
        default: false,
        required: false
    }
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function useDashmixDateTimePicker(props, ctx) {
    const value = composables_1.useSyncModel(composition_api_1.toRef(props, 'model'), ctx);
    const stepsSetup = composition_api_1.computed(() => {
        return {
            hourStep: props.steps.hour || 1,
            minuteStep: props.steps.minute || 10,
            secondStep: props.steps.second || 10
        };
    });
    return { stepsSetup, value };
}
exports.useDashmixDateTimePicker = useDashmixDateTimePicker;
