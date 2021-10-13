"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixBox = void 0;
const composition_api_1 = require("@vue/composition-api");
const Box_hooks_1 = require("./Box.hooks");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixBox = composition_api_1.defineComponent({
    name: 'DashmixBox',
    props: Box_hooks_1.dashmixBoxProps,
    setup(props, ctx) {
        return Box_hooks_1.useDashmixBox(props, ctx);
    },
    template: `
    <div class="block" :class="{'block-fx-shadow': shadow}">
    <div v-if="$slots.header" class="block-header"
         :class="[{'block-header-default': isHeaderDivided, 'border-bottom': !isHeaderDivided}, headerClass]">
      <slot name="header" />
    </div>

    <div class="block-content"
         :class="[bodyClass, bodyPaddingClass]">
      <slot />
    </div>

    <div v-if="$slots.footer" class="block-content block-content-full block-content-sm font-size-sm"
         :class="[{'bg-body-light': isFooterDivided}, footerClass]">
      <slot name="footer" />
    </div>
    </div>
  `
});
