// Copyright © 2021 Move Closer

import { PropType } from '@vue/composition-api'
import { RawLocation } from 'vue-router'

import { ComponentObjectPropsOptions } from '../../../contracts'

import { BreadcrumbsItem, BreadcrumbsItemProps, BreadcrumbsProps } from './Breadcrumbs.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const breadcrumbsProps: ComponentObjectPropsOptions<BreadcrumbsProps> = {
  /**
   * Breadcrumbs list.
   */
  items: {
    type: Array as PropType<BreadcrumbsItem[]>,
    required: true
  },

  /**
   * Show breadcrumb on mobile screen
   */
  showOnMobile: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * Root breadcrumb.
   */
  root: {
    type: Object as PropType<BreadcrumbsItem>,
    required: true
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const breadcrumbsItemProps: ComponentObjectPropsOptions<BreadcrumbsItemProps> = {
  active: {
    type: Boolean,
    required: false,
    default: true
  },

  label: {
    type: String,
    required: true
  },

  target: {
    type: [String, Object] as PropType<RawLocation>,
    required: true
  }
}
