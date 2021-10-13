"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapBadge = void 0;
const bootstrap_vue_1 = require("bootstrap-vue");
const composition_api_1 = require("@vue/composition-api");
const Badge_hooks_1 = require("./Badge.hooks");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.BootstrapBadge = composition_api_1.defineComponent({
    name: 'BootstrapBadge',
    components: { BBadge: bootstrap_vue_1.BBadge },
    props: Badge_hooks_1.bootstrapBadgeProps,
    template: `
    <BBadge :variant="theme">
    <slot />
    </BBadge>
  `
});
