// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { BootstrapAccordionItemProps } from './AccordionItem.contracts'
import { bootstrapAccordionItemProps, useBootstrapAccordionItem } from './AccordionItem.hooks'
import { BootstrapIcon } from '../../../Icon'

/**
 * @emits toggle - When the User clicks the toggler button.
 *
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapAccordionItem = defineComponent({
  name: 'BootstrapAccordionItem',
  components: { BootstrapIcon },
  props: bootstrapAccordionItemProps,
  emits: ['toggle'],

  setup (props: BootstrapAccordionItemProps, ctx: SetupContext) {
    return useBootstrapAccordionItem(props, ctx)
  },

  template: `
    <li class="accordion-item">
      <!-- Toggler -->
      <h2 class="accordion-header" :id="$id('toggler')">
        <button class="accordion-button" :class="{ 'collapsed': !isOpen, 'disabled': disabled }"
                type="button" @click="onTogglerClick"
                :aria-expanded="isOpen ? 'true' : 'false'" :aria-controls="$id('content')">
          {{ label }}
        </button>
      </h2>

      <!-- Content -->
      <div class="accordion-collapse collapse show" :class="{ '--open': isOpen }"
           :style="{ maxHeight: collapseMaxHeight }" :id="$id('content')"
           :aria-labelledby="$id('toggler')" ref="collapseRef">
        <div class="accordion-body">
          <slot :updateMaxHeight="updateMaxHeight" />
        </div>
      </div>
    </li>
  `
})
