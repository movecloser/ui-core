// Copyright © 2021 Move Closer

import { PropType } from '@vue/composition-api'

import { abstractBreadcrumbsProps } from '../../../../abstract'
import { ComponentObjectPropsOptions } from '../../../../contracts'

import {
  BootstrapBreadcrumbsItem,
  BootstrapBreadcrumbsProps,
  UseBootstrapBreadcrumbsProvides
} from './Breadcrumbs.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapBreadcrumbsProps: ComponentObjectPropsOptions<BootstrapBreadcrumbsProps> = {
  ...abstractBreadcrumbsProps,

  items: {
    type: Array as PropType<BootstrapBreadcrumbsItem[]>,
    required: true
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useBootstrapBreadcrumbs = (props: BootstrapBreadcrumbsProps): UseBootstrapBreadcrumbsProvides => {
  /**
   * @see UseBootstrapBreadcrumbsProvides.isLast
   */
  const isLast: UseBootstrapBreadcrumbsProvides['isLast'] = (item: BootstrapBreadcrumbsItem): boolean => {
    return props.items.indexOf(item) === props.items.length - 1
  }

  return { isLast }
}
