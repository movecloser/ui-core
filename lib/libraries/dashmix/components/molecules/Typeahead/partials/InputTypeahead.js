"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputTypeahead = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../../../composables");
const contracts_1 = require("../../../../contracts");
const atoms_1 = require("../../../atoms");
const InputGroup_1 = require("../../InputGroup");
const InputTypeahead_hook_1 = require("./InputTypeahead.hook");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.InputTypeahead = composition_api_1.defineComponent({
    name: 'InputTypeahead',
    components: { DashmixInputGroup: InputGroup_1.DashmixInputGroup, DashmixIcon: atoms_1.DashmixIcon, DashmixButton: atoms_1.DashmixButton, DashmixInput: atoms_1.DashmixInput },
    props: InputTypeahead_hook_1.inputTypeaheadProps,
    emits: ['onClear', 'onInput', 'focus', 'blur'],
    setup(props, ctx) {
        return {
            ...InputTypeahead_hook_1.useInputTypeahead(props, ctx),
            buttonTheme: contracts_1.DashmixTheme,
            icons: atoms_1.DashmixIconName,
            sizes: composables_1.SizeMap
        };
    },
    template: `
    <DashmixInputGroup :class="disabled ? '--disabled' : ''" :size="size">
    <template v-slot:prependText>
      <DashmixIcon :icon="loading ? icons.SpinnerSolid : icons.SearchSolid"
                   class="typeahead__search-icon" />
    </template>

    <DashmixInput :model.sync="value"
                  v-bind="{ name, placeholder, disabled, size }"
                  v-focus="autofocus"
                  @focus="() => $emit('focus')" @blur="() => $emit('blur')" />

    <template v-if="clearable && !disabled">
      <DashmixButton variant="icon" :icon="icons.TimesSolid" :theme="buttonTheme.Dark"
                     :size="sizes.Small"
                     @click="() => $emit('onClear')" v-slot:appendText />
    </template>
    </DashmixInputGroup>
  `
});
