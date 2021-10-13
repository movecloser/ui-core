"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixDropdownItem = void 0;
const composition_api_1 = require("@vue/composition-api");
const Dropdown_1 = require("../../../../../../abstract/components/Dropdown");
const Icon_1 = require("../../../atoms/Icon");
const DropdownItem_hooks_1 = require("./DropdownItem.hooks");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixDropdownItem = composition_api_1.defineComponent({
    name: 'DropdownItem',
    components: { DashmixIcon: Icon_1.DashmixIcon },
    props: Dropdown_1.dropdownItemProps,
    setup(props, ctx) {
        return { ...DropdownItem_hooks_1.useDashmixDropdownItem(props, ctx), DashmixIconName: Icon_1.DashmixIconName };
    },
    template: `
    <component :is="item.onClick ? 'button' : 'div'"
               class="dropdown-item" :class="[itemClass, { disabled: !isClickable }]"
               @click="onClick">
    <DashmixIcon v-if="item.icon" :icon="isLoading ? DashmixIconName.SpinnerSolid : item.icon"
                 :class="{ 'mr-2': item.label.length > 0 }" />
    {{ item.label }}
    </component>
  `
});
