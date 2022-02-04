// Copyright © 2022 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixModalProps } from './Modal.contracts'
import { dashmixModalProps, useDashmixModal } from './Modal.hooks'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixModal = defineComponent({
  name: 'DashmixModal',
  props: dashmixModalProps,
  emits: ['close'],

  setup (props: DashmixModalProps, ctx: SetupContext) {
    return useDashmixModal(props, ctx)
  },

  template: `
    <div v-if="isOpen" class="modal fade d-block" :class="{ 'show': isOpen }" tabindex="-1"
         role="dialog">
    <div v-if="isOpen" class="modal-backdrop fade show" @click="close" />
    <div class="modal-dialog modal-dialog-centered modal-dialog-popout"
         :class="[sizeClass, {'modal-dialog-scrollable': isScrollable }]" role="document">
      <slot v-bind="{ class: ['modal-content', contentClass], close }" />
    </div>
    </div>
  `
})
