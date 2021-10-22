"use strict";
// Copyright © 2021 Move Closer
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixSelect = void 0;
const vue_select_1 = __importDefault(require("vue-select"));
const composition_api_1 = require("@vue/composition-api");
const Icon_1 = require("../Icon");
const Select_hooks_1 = require("./Select.hooks");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.DashmixSelect = composition_api_1.defineComponent({
    name: 'DashmixSelect',
    components: { DashmixIcon: Icon_1.DashmixIcon, VSelect: vue_select_1.default },
    props: Select_hooks_1.dashmixSelectProps,
    setup(props, ctx) {
        return { ...Select_hooks_1.useDashmixSelect(props, ctx), DashmixIconName: Icon_1.DashmixIconName };
    },
    template: `
    <VSelect v-model="_model" v-bind="$props" :appendToBody="false" v-on="$listeners"
             :class="sizeClass">
    <template #spinner="{ loading }">
      <DashmixIcon v-if="loading" :icon="DashmixIconName.SpinnerSolid" />
    </template>

    <template #open-indicator="{ attributes }">
        <span v-bind="attributes">
          <DashmixIcon :icon="DashmixIconName.ChevronDownSolid" />
        </span>
    </template>

    <template #selected-option="{label, icon}">
      <slot name="selected-option">
        <DashmixIcon v-if="icon" v-bind="{ icon }" class="mr-2" />
        {{ label }}
      </slot>
    </template>

    <template #option="{ icon, label }">
      <slot name="option">
        <DashmixIcon v-if="icon" v-bind="{ icon }" class="mr-2" />
        {{ label }}
      </slot>
    </template>

    <template #no-options>
      <slot name="no-options">
        <span slot="no-options">Brak wyników.</span>
      </slot>
    </template>
    </VSelect>
  `
});