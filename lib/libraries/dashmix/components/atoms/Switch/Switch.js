"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixSwitch = void 0;
const composition_api_1 = require("@vue/composition-api");
const Switch_hook_1 = require("./Switch.hook");
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
exports.DashmixSwitch = composition_api_1.defineComponent({
    name: 'DashmixSwitch',
    props: Switch_hook_1.useSwitchesProps,
    emits: ['onChange'],
    setup(props, ctx) {
        return Switch_hook_1.useSwitches(props, ctx);
    },
    template: `
    <div class="custom-control custom-switch" :class="[themeClass, sizeClass ]">
    <template v-if="Array.isArray(options)">
      <label :for="name" class="pr-2 m-0">
        {{ $t(options[0].label) }}
      </label>
    </template>
    <input
        type="checkbox" class="custom-control-input"
        :id="name" :name="name"
        v-model="model" v-bind="{ disabled }" />
    <label class="custom-control-label" :for="name">
      {{ Array.isArray(options) ? $t(options[1].label) : $t(options.label) }}
    </label>
    </div>
  `
});
