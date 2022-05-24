// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'
import { BBreadcrumb, BBreadcrumbItem } from 'bootstrap-vue'

import { BootstrapIcon } from '../Icon'

import { BootstrapBreadcrumbsProps } from './Breadcrumbs.contracts'
import { bootstrapBreadcrumbsProps, useBootstrapBreadcrumbs } from './Breadcrumbs.hooks'

/**
 * @scopedSlot icon - Exposes the `item` object that represents a single `BootstrapBreadcrumbsItem`.
 * @scopedSlot label - Exposes the `item` object that represents a single `BootstrapBreadcrumbsItem`.
 *
 * @see https://bootstrap-vue.org/docs/components/breadcrumb
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapBreadcrumbs = defineComponent({
  name: 'BootstrapBreadcrumbs',
  components: { BBreadcrumb, BBreadcrumbItem, BootstrapIcon },
  props: bootstrapBreadcrumbsProps,

  setup (props: BootstrapBreadcrumbsProps) {
    const { isLast } = useBootstrapBreadcrumbs(props)
    return { isLast }
  },

  template: `
    <BBreadcrumb>
      <BBreadcrumbItem v-for="(item, index) in items" :key="item.label + index"
                       :active="isLast(item)" :href="item.isExternal ? item.target : undefined"
                       :to="item.isExternal ? undefined : item.target">
        <!-- Icon -->
        <slot v-if="$scopedSlots.icon" name="icon" v-bind:item="item" />
        <BootstrapIcon v-else-if="item.icon" :name="item.icon" />
        
        <span v-if="(typeof item.wcagTitle !== 'undefined' && item.wcagTitle.length > 0)" class="sr-only"> {{ item.wcagTitle }} </span>
        
        <!-- Label -->
        <slot v-if="$scopedSlots.label" name="label" v-bind:item="item" />
        <template v-else-if="item.label">{{ item.label }}</template>
      </BBreadcrumbItem>
    </BBreadcrumb>
  `
})
