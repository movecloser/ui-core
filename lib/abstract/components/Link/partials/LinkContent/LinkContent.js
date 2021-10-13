"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkContent = void 0;
const vue_fragment_1 = require("vue-fragment");
const composition_api_1 = require("@vue/composition-api");
const LinkContent_hooks_1 = require("./LinkContent.hooks");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.LinkContent = composition_api_1.defineComponent({
    name: 'LinkContent',
    props: LinkContent_hooks_1.linkContentProps,
    components: { Fragment: vue_fragment_1.Fragment },
    template: `
    <Fragment>
    <slot v-if="$slots.default" />
    <span v-else-if="label && label.length">
        {{ label }}
      </span>
    </Fragment>
  `
});
