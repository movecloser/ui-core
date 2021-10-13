"use strict";
// Copyright © 2021 Move Closer
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixDateTimePicker = void 0;
const composition_api_1 = require("@vue/composition-api");
const index_1 = __importDefault(require("vue2-datepicker/index"));
require("vue2-datepicker/locale/pl");
const DateTimePicker_hooks_1 = require("./DateTimePicker.hooks");
exports.DashmixDateTimePicker = composition_api_1.defineComponent({
    name: 'DashmixDateTimePicker',
    components: { DatePicker: index_1.default },
    props: DateTimePicker_hooks_1.dashmixDateTimePickerProps,
    setup(props, ctx) {
        return DateTimePicker_hooks_1.useDashmixDateTimePicker(props, ctx);
    },
    template: `
    <DatePicker v-model="value" v-on="$listeners" v-bind="{
      autocomplete, autofocus, defaultValue ,disabled, disabledDate,  format, placeholder, ...stepsSetup,range: range,
      readonly, showSecond: showSecond, type: pickerType, valueType: 'format', showWeekNumber
    }" />
  `
});
