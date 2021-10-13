"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixIcon = void 0;
const composition_api_1 = require("@vue/composition-api");
const Icon_hooks_1 = require("./Icon.hooks");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.DashmixIcon = composition_api_1.defineComponent({
    name: 'DashmixIcon',
    props: Icon_hooks_1.dashmixIconProps,
    setup(props) {
        return Icon_hooks_1.useDashmixIcon(props);
    },
    template: `
    <i class="icon" :class="[iconClass, sizeClass]" />
  `
});
