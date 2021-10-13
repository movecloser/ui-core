// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixAccordionItemProps } from './AccordionItem.contracts'
import { dashmixAccordionItemProps, useDashmixAccordionItem } from './AccordionItem.hooks'
import { DashmixIcon, DashmixIconName } from '../../../atoms/Icon'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const DashmixAccordionItem = defineComponent({
  name: 'DashmixAccordionItem',
  components: { DashmixIcon },
  props: dashmixAccordionItemProps,
  emits: ['click'],

  setup (props: DashmixAccordionItemProps, ctx: SetupContext) {
    return { ...useDashmixAccordionItem(props, ctx), DashmixIconName }
  },

  template: `
    <div class="accordion-item" :class="stylePreset.main" @click="onClick">

    <div :class="stylePreset.labelWrapper">
      <span v-if="isSimpleLabel" :class="stylePreset.label">{{ label }}</span>
      <component v-else :class="stylePreset.label" :is="label.component" v-bind="label.props" />
      <DashmixIcon v-if="!isOpen" :icon="DashmixIconName.ChevronDownSolid" class="mr-3" />
      <DashmixIcon v-else :icon="DashmixIconName.ChevronUpSolid" class="mr-3" />
    </div>

    <div class="accordion-item-content" :class="{ 'show': isOpen, 'visible': isVisible }">
      <slot />
    </div>
    </div>
  `
})
