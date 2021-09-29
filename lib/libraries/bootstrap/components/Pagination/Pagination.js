"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapPagination = void 0;
const bootstrap_vue_1 = require("bootstrap-vue");
const composition_api_1 = require("@vue/composition-api");
const Pagination_hooks_1 = require("./Pagination.hooks");
/**
 * @emits update:model - When the value of the `currentPage` gets changed.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.BootstrapPagination = composition_api_1.defineComponent({
    name: 'BootstrapPagination',
    components: { BPagination: bootstrap_vue_1.BPagination },
    props: Pagination_hooks_1.bootstrapPaginationProps,
    emits: ['update:model'],
    template: `
    <BPagination v-bind="$attrs" :value="model" @change="$emit('update:model', $event)" />
  `
});
