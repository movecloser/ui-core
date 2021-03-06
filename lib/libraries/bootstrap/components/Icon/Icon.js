"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapIcon = void 0;
const composition_api_1 = require("@vue/composition-api");
const Icon_hooks_1 = require("./Icon.hooks");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl> (original)
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl> (edited)
 */
exports.BootstrapIcon = composition_api_1.defineComponent({
    name: 'BootstrapIcon',
    props: Icon_hooks_1.bootstrapIconProps,
    setup(props) {
        const internalInstance = composition_api_1.getCurrentInstance();
        const { component, _title } = Icon_hooks_1.useBootstrapIcon(props, internalInstance);
        return { component, _title };
    },
    template: `
      <svg class="icon" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" v-bind="{ height, width }">
        <g :fill="color" :stroke="color">
          <slot v-if="$slots.default" />
          <component v-else-if="component" :is="component" />
        </g>
      </svg>
  `
});
