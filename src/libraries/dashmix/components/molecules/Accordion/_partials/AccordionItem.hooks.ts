// Copyright © 2021 Move Closer

import { computed, PropType, SetupContext, toRef, ref, watch } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../../contracts'

import {
  DashmixAccordionLabel,
  DashmixAccordionStylePreset,
  DashmixAccordionType
} from '../Accordion.contracts'

import { DashmixAccordionItemProps } from './AccordionItem.contracts'
import { dashmixAccordionStylePresets } from '../Accordion.config'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const dashmixAccordionItemProps: ComponentObjectPropsOptions<DashmixAccordionItemProps> = {
  /**
   * Determines whether the item should be opened.
   */
  isOpen: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * Item's label.
   */
  label: {
    type: [String, Function, Object] as PropType<string | DashmixAccordionLabel>,
    required: false,
    default: ''
  },

  /**
   * One of the predefined style presets.
   * @see DashmixAccordionType
   */
  type: {
    type: String as PropType<DashmixAccordionType>,
    required: false,
    default: DashmixAccordionType.Default
  },

  /**
   * Properties of label component
   */
  labelProps: {
    type: Object,
    required: false,
    default () {
      return {}
    }
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useDashmixAccordionItem = (props: DashmixAccordionItemProps, ctx: SetupContext) => {
  // Extract the `type` prop.
  const type = toRef(props, 'type')
  const isOpen = toRef(props, 'isOpen')
  const isVisible = ref(false)

  // Extract the `emit()` function.
  const { emit } = ctx

  const isSimpleLabel = computed<boolean>(() => {
    return typeof props.label === 'string'
  })

  /**
   * Handles the @click event on the root HTML element.
   */
  const onClick = () => {
    emit('click')
  }

  /**
   * The predefined style preset.
   * @see DashmixAccordionStylePreset
   */
  const stylePreset = computed<DashmixAccordionStylePreset>(() => {
    if (!Object.values(DashmixAccordionType).includes(type.value)) {
      return dashmixAccordionStylePresets.default
    }

    return dashmixAccordionStylePresets[type.value]
  })

  watch(isOpen, (isOpen) => {
    setTimeout(() => {
      isVisible.value = isOpen
    }, 500)
  })
  return { isSimpleLabel, onClick, stylePreset, isVisible }
}
