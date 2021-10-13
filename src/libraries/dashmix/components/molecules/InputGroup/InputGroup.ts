// Copyright © 2021 Move Closer

import { defineComponent, toRef } from '@vue/composition-api'

import { HasSize, hasSizeProp, useSizeClass } from '../../../../../composables'

import { dashmixSizeClasses } from './InputGroup.maps'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixInputGroup = defineComponent({
  name: 'DashmixInputGroup',
  props: hasSizeProp,

  setup (props: HasSize) {
    const size = toRef(props, 'size')
    return { sizeClass: useSizeClass(size, dashmixSizeClasses) }
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
})
