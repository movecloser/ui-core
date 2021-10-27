"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixTypeahead = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../../composables");
const contracts_1 = require("../../../contracts");
const atoms_1 = require("../../atoms");
const ActionBadge_1 = require("../ActionBadge");
const Dropdown_1 = require("../Dropdown");
const InputGroup_1 = require("../InputGroup");
const InputTypeahead_1 = require("./partials/InputTypeahead");
const Typeahead_hook_1 = require("./Typeahead.hook");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.DashmixTypeahead = composition_api_1.defineComponent({
    name: 'DashmixTypeahead',
    components: {
        InputTypeahead: InputTypeahead_1.InputTypeahead,
        DashmixActionBadge: ActionBadge_1.DashmixActionBadge,
        DashmixDropdown: Dropdown_1.DashmixDropdown,
        DashmixInputGroup: InputGroup_1.DashmixInputGroup,
        DashmixInput: atoms_1.DashmixInput,
        DashmixButton: atoms_1.DashmixButton
    },
    props: Typeahead_hook_1.typeaheadProps,
    emits: ['cleared', 'selected', 'searched', 'deleted'],
    setup(props, ctx) {
        return {
            ...Typeahead_hook_1.useTypeahead(props, ctx),
            badgeShapes: atoms_1.DashmixBadgeShape,
            colorTheme: contracts_1.DashmixTheme,
            icon: atoms_1.DashmixIconName,
            sizes: composables_1.SizeMap
        };
    },
    template: `
    <div class="typeahead">
    <!-- Typeahead input -->
    <DashmixDropdown :items="dropdownItems">
      <template v-slot:trigger="{open, close}">
        <template v-if="!isMulti && showSelection && selected.length > 0">
          <DashmixInputGroup :size="size">
            <DashmixInput :model="selected[0].label" :name="name" class="text-gray-darker"
                          disabled />
            <template v-slot:append>
              <DashmixButton variant="icon" :icon="icon.TimesSolid" :theme="colorTheme.Dark"
                             :size="sizes.Small"
                             :disabled="disabled"
                             @click="() => $emit('deleted', selected[0])" v-slot:appendText />
            </template>
          </DashmixInputGroup>
        </template>

        <template v-else>
          <InputTypeahead
              ref="input"
              v-bind="{ clearable, name, placeholder: $t(placeholder), isMulti, size, loading, disabled, autofocus }"
              :model.sync="value"
              v-closable="{ handler: close, exclude: [] }"
              @onClear="onClear" @onInput="onInputChange" @focus="open" />
        </template>
      </template>
    </DashmixDropdown>


    <!-- Selected elements -->
    <div v-if="showSelection && isMulti" class="d-flex flex-wrap">
      <DashmixActionBadge
          v-for="(selectedItem, index) in selected"
          :theme="badgeTheme"
          :variant="badgeVariant"
          :key="index + selectedItem.label + name"
          :shape="badgeShapes.Rectangle"
          class="mr-2 mt-2"
          :icon="icon.TimesSolid"
          @clicked="() => $emit('deleted', selectedItem)"
          :disabled="disabled"
      >
        <slot :selected="selectedItem">
          {{ selectedItem.label | trim(badgeMaxLength) }}
        </slot>
      </DashmixActionBadge>
    </div>
    </div>
  `
});
