// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { DashmixBadge, DashmixButton, DashmixIcon } from '../../atoms'

import { actionBadgeProps } from './ActionBadge.hook'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const DashmixActionBadge = defineComponent({
  name: 'DashmixActionBadge',
  components: { DashmixButton, DashmixBadge, DashmixIcon },
  props: actionBadgeProps,
  emits: ['clicked'],

  template: `
    <DashmixBadge class="badge" v-bind="$props">
    <slot>{{ label }}</slot>
    <DashmixButton class="badge__button"
                   variant="icon"
                   :size="buttonSize"
                   :disabled="disabled"
                   @click.native.stop="() => $emit('clicked')">
      <DashmixIcon class="badge__icon" :icon="icon" />
    </DashmixButton>
    </DashmixBadge>
  `
})
