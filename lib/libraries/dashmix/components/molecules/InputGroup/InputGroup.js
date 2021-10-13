"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixInputGroup = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../../composables");
const InputGroup_maps_1 = require("./InputGroup.maps");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixInputGroup = composition_api_1.defineComponent({
    name: 'DashmixInputGroup',
    props: composables_1.hasSizeProp,
    setup(props) {
        const size = composition_api_1.toRef(props, 'size');
        return { sizeClass: composables_1.useSizeClass(size, InputGroup_maps_1.dashmixSizeClasses) };
    },
    template: `
    <div class="input-group custom" :class="sizeClass">

    <div v-if="this.$slots.prependText" class="input-group-prepend">
        <span class="input-group-text">
          <slot name="prependText" />
        </span>
    </div>

    <div v-if="this.$slots.prepend" class="input-group-prepend">
      <slot name="prepend" />
    </div>

    <slot />

    <div v-if="this.$slots.appendText" class="input-group-append">
        <span class="input-group-text">
          <slot name="appendText" />
        </span>
    </div>

    <div v-if="this.$slots.append" class="input-group-prepend">
      <slot name="append" />
    </div>

    </div>
  `
});
