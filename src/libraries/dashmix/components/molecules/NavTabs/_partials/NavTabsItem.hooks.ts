// Copyright © 2022 Move Closer

import { SetupContext } from '@vue/composition-api'

import { canBeDisabledProp } from '../../../../../../composables'
import { ComponentObjectPropsOptions } from '../../../../../../contracts'

import { DashmixNavTabsItemProps } from './NavTabsItem.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixNavTabsItemProps: ComponentObjectPropsOptions<DashmixNavTabsItemProps> = {
  ...canBeDisabledProp,

  /**
   * Determines whether the tab is the currently active one.
   */
  active: {
    type: Boolean,
    required: false,
    default: true
  },

  /**
   * Tab's label.
   */
  label: {
    type: [String, Function],
    required: true
  },

  /**
   * Index of tab.
   */
  id: {
    type: [String, Number],
    required: true
  },

  /**
   * Index of tab.
   */
  index: {
    type: Number,
    required: true
  },

  /**
   * Properties of label component
   */
  props: {
    type: Object,
    required: false,
    default () {
      return {}
    }
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useDashmixNavTabsItem = (props: DashmixNavTabsItemProps, ctx: SetupContext) => {
  /**
   * Handles the @click event on the root `<li>` element.
   */
  const onClick = (): void => {
    if (!props.disabled) {
      ctx.emit('click')
    }
  }

  return { isSimpleTab: (typeof props.label === 'string'), onClick }
}
