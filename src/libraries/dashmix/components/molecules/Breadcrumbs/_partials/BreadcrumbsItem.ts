// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { abstractBreadcrumbsItemProps } from '../../../../../../abstract'

import { DashmixLink } from '../../../atoms/Link'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const DashmixBreadcrumbsItem = defineComponent({
  name: 'DashmixBreadcrumbsItem',
  components: { DashmixLink },
  props: abstractBreadcrumbsItemProps,

  template: `
    <li class="breadcrumb-item">
    <DashmixLink :target="target" :disabled="!active">{{ label }}</DashmixLink>
    </li>
  `
})
