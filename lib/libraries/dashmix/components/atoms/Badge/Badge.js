"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixBadge = void 0;
const composition_api_1 = require("@vue/composition-api");
const Badge_hooks_1 = require("./Badge.hooks");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixBadge = composition_api_1.defineComponent({
    name: 'DashmixBadge',
    props: Badge_hooks_1.dashmixBadgeProps,
    setup(props) {
        return Badge_hooks_1.useDashmixBadge(props);
    },
    template: `
    <span class="badge" :class="[shapeClass, styleClass]">
      <slot>{{ label }}</slot>
    </span>
  `
});
