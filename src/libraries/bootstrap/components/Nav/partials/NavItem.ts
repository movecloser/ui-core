// Copyright © 2021 Move Closer

import { computed, defineComponent } from '@vue/composition-api'

import { AbstractNavItemProps, abstractNavItemProps, useNavItem } from '../../../../../abstract'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapNavItem = defineComponent({
  name: 'BootstrapNavItem',
  props: abstractNavItemProps,
  emits: ['click'],

  setup (props: AbstractNavItemProps) {
    const { innerClassList, innerId } = useNavItem(props)

    const bindings = computed<{
      'aria-controls': string;
      'aria-selected': string;
      class: string|string[];
      disabled: boolean;
      id: string;
      role: string;
    }>(() => ({
      'aria-controls': props.id,
      'aria-selected': props.active ? 'true' : 'false',
      class: innerClassList.value,
      disabled: props.disabled,
      id: innerId.value,
      role: 'tab'
    }))

    return { bindings }
  },

  template: `
    <a v-if="tag === 'a'" v-bind="bindings" @click="$emit('click')">
      {{ label }}
    </a>
    <button v-else v-bind="bindings" @click="$emit('click')">
      {{ label }}
    </button>
  `
})
