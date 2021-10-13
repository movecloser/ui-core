"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixActionBadge = void 0;
const composition_api_1 = require("@vue/composition-api");
const atoms_1 = require("../../atoms");
const ActionBadge_hook_1 = require("./ActionBadge.hook");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.DashmixActionBadge = composition_api_1.defineComponent({
    name: 'DashmixActionBadge',
    components: { DashmixButton: atoms_1.DashmixButton, DashmixBadge: atoms_1.DashmixBadge, DashmixIcon: atoms_1.DashmixIcon },
    props: ActionBadge_hook_1.actionBadgeProps,
    emits: ['clicked'],
    template: `
    <DashmixBadge class="badge" v-bind="$props">
    <slot>{{ label }}</slot>
    <DashmixButton class="badge__button"
                   variant="icon"
                   :size="buttonSize"
                   :disabled="disabled"
                   @click.native.stop="() => $emit('clicked')">
      <DashmixIcon class="badge__icon" :icon="icon" />
    </DashmixButton>
    </DashmixBadge>
  `
});
