// Copyright © 2021 Move Closer

import { PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../contracts'

import { AbstractBreadcrumbsItem, AbstractBreadcrumbsProps } from './Breadcrumbs.contracts'

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
