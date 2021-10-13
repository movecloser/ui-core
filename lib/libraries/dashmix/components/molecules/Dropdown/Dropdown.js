"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixDropdown = void 0;
const composition_api_1 = require("@vue/composition-api");
const uuid_1 = require("uuid");
const Button_1 = require("../../atoms/Button");
const Icon_1 = require("../../atoms/Icon");
const _partials_1 = require("./_partials");
const Dropdown_hooks_1 = require("./Dropdown.hooks");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.DashmixDropdown = composition_api_1.defineComponent({
    name: 'Dropdown',
    components: { DashmixButton: Button_1.DashmixButton, DashmixDropdownDivider: _partials_1.DashmixDropdownDivider, DashmixDropdownItem: _partials_1.DashmixDropdownItem, DashmixIcon: Icon_1.DashmixIcon },
    props: Dropdown_hooks_1.dashmixDropdownProps,
    setup(props, ctx) {
        return { ...Dropdown_hooks_1.useDashmixDropdown(props, ctx), id: uuid_1.v4() };
    },
    template: `
    <div class="dropdown" :class="[dropdownClass, { open: isOpen }]">
    <slot name="trigger"
          v-bind="{ close, isOpen, open, toggle, triggerSize, triggerTheme, triggerVariant }">
      <DashmixButton :id="id" :size="triggerSize" :theme="triggerTheme" :variant="triggerVariant"
                     :icon="icon" :label="label"
                     data-toggle="dropdown" aria-haspopup="true"
                     :aria-expanded="isOpen ? 'true' : 'false'"
                     v-closable="{ handler: 'close', exclude: [] }" @click="toggle" />
    </slot>

    <div class="dropdown-menu" :class="[dropdownMenuClass, { 'd-block': isOpen }]"
         :aria-labelledby="id">
      <template v-for="(item, i) in items">
        <DashmixDropdownDivider v-if="item.type === 'divider'" :key="'item'+ i" />
        <DashmixDropdownItem v-else :key="'item'+ i" :item="item" @click="close">Hello
        </DashmixDropdownItem>
      </template>
      <slot v-bind="{ close, isOpen }" />
    </div>
    </div>
  `
});
