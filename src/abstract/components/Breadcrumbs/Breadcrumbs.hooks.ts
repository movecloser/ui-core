// Copyright © 2021 Move Closer

import { RawLocation } from 'vue-router'

import { PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../contracts'

import {
  AbstractBreadcrumbsItem,
  AbstractBreadcrumbsItemProps,
  AbstractBreadcrumbsProps
} from './Breadcrumbs.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const abstractBreadcrumbsProps: ComponentObjectPropsOptions<AbstractBreadcrumbsProps> = {
  items: {
    type: Array as PropType<AbstractBreadcrumbsItem[]>,
    required: true
  },

  showOnMobile: {
    type: Boolean,
    required: false,
    default: false
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl> (edited)
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl> (original)
 */
export const abstractBreadcrumbsItemProps: ComponentObjectPropsOptions<AbstractBreadcrumbsItemProps> = {
  active: {
    type: Boolean,
    required: false,
    default: true
  },

  isExternal: {
    type: Boolean,
    required: false,
    default: false
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
