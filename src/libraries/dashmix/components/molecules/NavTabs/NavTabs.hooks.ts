// Copyright © 2021 Move Closer

import { computed, PropType, SetupContext } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import { canBeDisabledProp } from '../../../../../composables'

import { DashmixNavTabsProps } from './NavTabs.contracts'
import { DashmixNavTabsItemProps } from './_partials'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const dashmixNavTabsProps: ComponentObjectPropsOptions<DashmixNavTabsProps> = {
  ...canBeDisabledProp,

  /**
   * The ID of the currently-active tab.
   */
  active: {
    type: String,
    required: true
  },

  /**
   * List of tabs to render.
   */
  items: {
    type: Array as PropType<DashmixNavTabsItemProps[]>,
    required: true
  },

  /**
   * Determine if should use justified tabs.
   */
  justify: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * Determine if tabs has background.
   */
  hasDefaultBackground: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * Determint if tabs are vertically scrollable.
   */
  scrollable: {
    type: Boolean,
    required: false,
    default: false
  }
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useDashmixNavTabs = (props: DashmixNavTabsProps, ctx: SetupContext) => {
  // Extract the `emit()` function.
  const { emit } = ctx

  /**
   * Currently-active tab.
   */
  const activeTab = computed<string>({
    get () {
      return props.active
    },
    set (value): void {
      emit('update:active', value)
    }
  })

  /**
   * Activates the tab of a passed-in ID.
   * @param id - The ID of the tab that is to be set as 'active'.
   */
  const activateTab = (id: string): void => {
    if (!props.disabled) {
      activeTab.value = id
    }
  }

  /**
   * Checks if the tab of a passed-in ID is the currently-active one.
   * @param id - The ID of the tab that is to be checked.
   */
  const isTabActive = (id: string): boolean => {
    return activeTab.value === id
  }

  return { activeTab, activateTab, isTabActive }
}
