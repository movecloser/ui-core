// Copyright © 2021 Move Closer

import { defineComponent, PropType } from '@vue/composition-api'

import { AbstractBreadcrumbsItem, abstractBreadcrumbsProps } from '../../../../../abstract'

import { DashmixIcon } from '../../atoms/Icon'

import { DashmixDropdown } from '../Dropdown'
import { DashmixBreadcrumbsItem } from './_partials/BreadcrumbsItem'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const DashmixBreadcrumbs = defineComponent({
  name: 'DashmixBreadcrumbs',
  components: { DashmixBreadcrumbsItem, DashmixIcon, DashmixDropdown },
  props: {
    ...abstractBreadcrumbsProps,
    root: {
      type: Object as PropType<AbstractBreadcrumbsItem>,
      required: true
    }
  },

  template: `
    <nav aria-label="breadcrumb" class="d-md-block" :class="{ 'd-none' : !showOnMobile }">
    <ol class="breadcrumb breadcrumb-alt push">
      <DashmixBreadcrumbsItem :label="root.label" :target="root.target" />
      <DashmixBreadcrumbsItem v-for="(b, i) in items" :key="'bread-'+i"
                              :active="i < items.length - 1" :label="b.label" :target="b.target" />
    </ol>
    </nav>
  `
})
