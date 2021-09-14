// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { BootstrapIcon } from '../Icon'

import './Breadcrumbs.scss'
import { BootstrapBreadcrumbsProps } from './Breadcrumbs.contracts'
import { bootstrapBreadcrumbsProps, useBootstrapBreadcrumbs } from './Breadcrumbs.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapBreadcrumbs = defineComponent({
  name: 'BootstrapBreadcrumbs',
  components: { BootstrapIcon },
  props: bootstrapBreadcrumbsProps,

  setup (props: BootstrapBreadcrumbsProps) {
    const { isLast } = useBootstrapBreadcrumbs(props)
    return { isLast }
  },

  template: `
    <b-breadcrumb>
      <b-breadcrumb-item v-for="item in items" :key="item.label"
                         :active="isLast(item)" :to="item.target">
        <BootstrapIcon v-if="item.icon" :name="item.icon" />
        {{ item.label }}
      </b-breadcrumb-item>
    </b-breadcrumb>
  `
})
