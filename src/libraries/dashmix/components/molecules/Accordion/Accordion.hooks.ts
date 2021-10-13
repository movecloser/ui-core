// Copyright © 2021 Move Closer

import {
  Data,
  onMounted,
  PropType,
  ref,
  Ref,
  SetupContext,
  toRefs,
  watch
} from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'

import {
  DashmixAccordionItem,
  DashmixAccordionProps,
  DashmixAccordionType
} from './Accordion.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const dashmixAccordionProps: ComponentObjectPropsOptions<DashmixAccordionProps> = {
  defaultOpen: {
    type: Number,
    required: false
  },

  itemToClose: {
    type: Number,
    required: false
  },

  itemToOpen: {
    type: Number,
    required: false
  },

  itemToToggle: {
    type: Number,
    required: false
  },

  items: {
    type: Array as PropType<DashmixAccordionItem[]>,
    required: true
  },

  onlySingleOpen: {
    type: Boolean,
    required: false,
    default: false
  },

  type: {
    type: String as PropType<DashmixAccordionType>,
    required: false,
    default: DashmixAccordionType.Default
  }
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useDashmixAccordion = (props: DashmixAccordionProps, ctx: SetupContext) => {
  /**
   * Items that are currently open.
   */
  const openItems: Ref<number[]> = ref([])

  /**
   * Determines whether the item of a passed-in index is currently open.
   *
   * @param itemIndex - Index of an item that is to be checked.
   *
   * @see DashmixAccordionProps.items
   */
  const isItemOpen = (itemIndex: number): boolean => {
    return openItems.value.includes(itemIndex)
  }

  /**
   * Opens the item of a passed-in index.
   *
   * @param itemIndex - Index of an item that is to be opened.
   *
   * @see DashmixAccordionProps.items
   */
  const openItem = (itemIndex: number): void => {
    openItems.value = [...openItems.value, itemIndex]
  }

  /**
   * Closes the item of a passed-in index.
   *
   * @param itemIndex - Index of an item that is to be closed.
   *
   * @see DashmixAccordionProps.items
   */
  const closeItem = (itemIndex: number): void => {
    openItems.value = openItems.value.filter(item => item !== itemIndex)
  }

  /**
   * Toggles (opens/closes) the item of a passed-in index.
   *
   * @param itemIndex - Index of an item that is to be toggled.
   *
   * @see DashmixAccordionProps.items
   */
  const toggleItem = (itemIndex: number): void => {
    isItemOpen(itemIndex) ? closeItem(itemIndex) : openItem(itemIndex)
  }

  /**
   * Closes all items **but** the one of a passed-in index.
   *
   * @param itemIndex - Index of an item that should stay untouched.
   *
   * @see DashmixAccordionProps.items
   * @see DashmixAccordionProps.onlySingleOpen
   */
  const closeOtherItems = (itemIndex: number): void => {
    openItems.value.filter(item => item !== itemIndex).forEach(item => closeItem(item))
  }

  /**
   * Handles the `@click` event on the `<DashmixAccordionItem>`.
   *
   * @param itemIndex - Index of the item being clicked.
   *
   * @see DashmixAccordionProps.items
   */
  const onItemClick = (itemIndex: number): void => {
    toggleItem(itemIndex)
    ctx.emit('toggled', { itemIndex })
    if (props.onlySingleOpen) closeOtherItems(itemIndex)
  }

  /**
   * Send update event to parent.
   *
   * @param from - ID of the changed item.
   * @param payload - Event data.
   */
  const onItemChanged = (from: string, payload: Data) => {
    ctx.emit('changed', {
      item: from,
      payload
    })
  }

  onMounted(() => {
    if (typeof props.defaultOpen === 'number') {
      openItem(props.defaultOpen)
    }
  })

  const { itemToClose, itemToOpen, itemToToggle } = toRefs(props)

  if (typeof itemToClose !== 'undefined') {
    watch(itemToClose, (newValue) => {
      if (typeof newValue === 'number' && newValue >= 0) {
        closeItem(newValue)
      }
    })
  }

  if (typeof itemToOpen !== 'undefined') {
    watch(itemToOpen, (newValue) => {
      if (typeof newValue === 'number' && newValue >= 0) {
        openItem(newValue)
      }
    })
  }

  if (typeof itemToToggle !== 'undefined') {
    watch(itemToToggle, (newValue) => {
      if (typeof newValue === 'number' && newValue >= 0) {
        toggleItem(newValue)
      }
    })
  }

  return { isItemOpen, onItemClick, onItemChanged }
}
