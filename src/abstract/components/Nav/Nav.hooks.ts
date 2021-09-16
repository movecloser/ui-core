// Copyright © 2021 Move Closer

import { computed, PropType, SetupContext } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../contracts'

import { AbstractNavProps } from './Nav.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const abstractNavProps: ComponentObjectPropsOptions<AbstractNavProps> = {
  /**
   * The ID of the currently-active item.
   */
  activeItem: {
    type: String,
    required: true
  },

  /**
   * Items to render.
   */
  items: {
    type: Array as PropType<AbstractNavProps['items']>,
    required: true
  }
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useNav = (props: AbstractNavProps, ctx: SetupContext) => {
  // Extract the `emit()` function.
  const { emit } = ctx

  /**
   * The ID of the currently-active tab.
   */
  const _activeItem = computed<string>({
    get () {
      return props.activeItem
    },
    set (value): void {
      emit('update:activeItem', value)
    }
  })

  /**
   * Activates the item of a passed-in ID.
   *
   * @param id - The ID of the item that is to be set as 'active'.
   */
  const activateItem = (id: string): void => {
    _activeItem.value = id
  }

  /**
   * Checks if the item of a passed-in ID is the currently-active one.
   *
   * @param id - The ID of the item that is to be checked.
   */
  const isItemActive = (id: string): boolean => {
    return _activeItem.value === id
  }

  return { _activeItem, activateItem, isItemActive }
}
