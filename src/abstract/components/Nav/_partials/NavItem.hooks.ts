// Copyright © 2021 Move Closer

import { computed, PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../contracts'
import { canBeDisabledProp } from '../../../../composables'

import { AbstractNavItemProps, AbstractNavItemTag } from './NavItem.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const abstractNavItemProps: ComponentObjectPropsOptions<AbstractNavItemProps> = {
  ...canBeDisabledProp,

  /**
   * Determines whether the item is the currently-active one.
   */
  active: {
    type: Boolean,
    required: false,
    default: true
  },

  /**
   * Unique ID of the given item. Needed to correctly switch between different items.
   */
  id: {
    type: String,
    required: true
  },

  /**
   * Item's label.
   */
  label: {
    type: String,
    required: true
  },

  /**
   * HTML tag that the item should be built on.
   */
  tag: {
    type: String as PropType<AbstractNavItemProps['tag']>,
    required: false,
    default: AbstractNavItemTag.Button
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useNavItem = (props: AbstractNavItemProps) => {
  /**
   * List of the CSS classes that should be applied to the inner HTML element.
   */
  const innerClassList = computed<string[]>(() => {
    const classList: string[] = ['nav-link']

    if (props.active) {
      classList.push('active')
    }

    if (props.disabled) {
      classList.push('disabled')
    }

    return classList
  })

  /**
   * Value for the `[id]` attribute of the inner HTML element.
   */
  const innerId = computed<string>(() => `${props.id}-tab`)

  return { innerClassList, innerId }
}
