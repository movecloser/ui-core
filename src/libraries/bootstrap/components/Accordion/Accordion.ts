// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { BootstrapAccordionProps } from './Accordion.contracts'
import { BootstrapAccordionItem } from './partials'
import { bootstrapAccordionProps, useBootstrapAccordion } from './Accordion.hooks'

/**
 * @emits toggle - When the User toggles any of the accordion items.
 *
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const BootstrapAccordion = defineComponent({
  name: 'BootstrapAccordion',
  components: { BootstrapAccordionItem },
  props: bootstrapAccordionProps,
  emits: ['toggle'],

  setup (props: BootstrapAccordionProps, ctx: SetupContext) {
    return useBootstrapAccordion(props, ctx)
  },

  template: `
    <component :is="tag" class="accordion accordion-flush list-unstyled">
      <BootstrapAccordionItem v-for="(item, index) in items" :key="'accordion-' + item.id"
                              v-bind="item" :isOpen="isItemOpen(index)"
                              @toggle="onItemToggle(index)">
        <template v-slot:default="{ updateMaxHeight }">
          <component v-if="canItemBeOpen(index)" :is="item.component" v-bind="item?.props" :id="item.id"
                     @changed="payload => onItemChanged(item.id, payload)" @recalcHeight="updateMaxHeight" />
        </template>
      </BootstrapAccordionItem>
    </component>
  `
})
