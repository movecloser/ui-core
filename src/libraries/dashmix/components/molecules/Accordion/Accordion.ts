// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixAccordionProps } from './Accordion.contracts'
import { DashmixAccordionItem } from './_partials'
import { dashmixAccordionProps, useDashmixAccordion } from './Accordion.hooks'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixAccordion = defineComponent({
  name: 'DashmixAccordion',
  components: { DashmixAccordionItem },
  props: dashmixAccordionProps,
  emits: ['toggled'],

  setup (props: DashmixAccordionProps, ctx: SetupContext) {
    return useDashmixAccordion(props, ctx)
  },

  template: `
    <div class="accordion">
    <DashmixAccordionItem v-for="(item, index) in items" :key="'accordion-' + item.id"
                          v-bind="{ type }" :isOpen="isItemOpen(index)" :label="item.label"
                          @click="onItemClick(index)">
      <component :is="item.component" v-bind="item?.props" :id="item.id"
                 @changed="payload => onItemChanged(item.id, payload)" />
    </DashmixAccordionItem>
    </div>
  `
})
