// Copyright © 2021 Move Closer

import { onMounted, ref, SetupContext, toRefs, watch } from '@vue/composition-api'

import { canBeDisabledProp } from '../../../../_composables'
import { ComponentObjectPropsOptions } from '../../../../_contracts'

import { BootstrapAccordionItemProps, UseBootstrapAccordionItemProvides } from './AccordionItem.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapAccordionItemProps: ComponentObjectPropsOptions<BootstrapAccordionItemProps> = {
  ...canBeDisabledProp,

  id: {
    type: String,
    required: true
  },

  isOpen: {
    type: Boolean,
    required: false,
    default: false
  },

  onToggle: {
    type: Function,
    required: false
  },

  label: {
    type: String,
    required: false,
    default: ''
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useBootstrapAccordionItem = (
  props: BootstrapAccordionItemProps,
  ctx: SetupContext
): UseBootstrapAccordionItemProvides => {
  const { emit } = ctx

  const { isOpen } = toRefs(props)

  /**
   * Reference to the `.accordion-collapse` element.
   */
  const collapseRef = ref<HTMLDivElement|null>(null)

  /**
   * Value for the `max-height` declaration of the `.accordion-collapse` element.
   */
  const collapseMaxHeight = ref<string>('0px')

  /**
   * Opens (reveals) the `.accordion-collapse` element.
   */
  const open = (): void => {
    if (collapseRef.value === null) {
      throw new Error('BootstrapAccordionItem.watch(isOpen): [collapseRef.value] is [null]!')
    }
    collapseMaxHeight.value = collapseRef.value.scrollHeight + 'px'
  }

  /**
   * Collapses (closes) the `.accordion-collapse` element.
   */
  const collapse = (): void => { collapseMaxHeight.value = '0px' }

  /**
   * Updates the value of the `collapseMaxHeight` ref.
   */
  const updateMaxHeight = (): void => { isOpen.value ? open() : collapse() }

  watch(isOpen, updateMaxHeight)
  onMounted(updateMaxHeight)

  /**
   * Handles the `@click` event on the toggler button.
   */
  const onTogglerClick = () => {
    if (props.onToggle && !props.onToggle()) {
      return
    }

    emit('toggle')
  }

  return { collapseMaxHeight, collapseRef, onTogglerClick, updateMaxHeight }
}
