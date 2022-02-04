"use strict";
// Copyright © 2022 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixModal = void 0;
const composition_api_1 = require("@vue/composition-api");
const Modal_hooks_1 = require("./Modal.hooks");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixModal = composition_api_1.defineComponent({
    name: 'DashmixModal',
    props: Modal_hooks_1.dashmixModalProps,
    emits: ['close'],
    setup(props, ctx) {
        return Modal_hooks_1.useDashmixModal(props, ctx);
    },
    template: `
    <div v-if="isOpen" class="modal fade d-block" :class="{ 'show': isOpen }" tabindex="-1"
         role="dialog">
    <div v-if="isOpen" class="modal-backdrop fade show" @click="close" />
    <div class="modal-dialog modal-dialog-centered modal-dialog-popout"
         :class="[sizeClass, {'modal-dialog-scrollable': isScrollable }]" role="document">
      <slot v-bind="{ class: ['modal-content', contentClass], close }" />
    </div>
    </div>
  `
});
