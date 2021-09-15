// Copyright © 2021 Move Closer

import { BPagination } from 'bootstrap-vue'
import { defineComponent } from '@vue/composition-api'

import { bootstrapPaginationProps } from './Pagination.hooks'

/**
 * @emits update:model - When the value of the `currentPage` gets changed.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapPagination = defineComponent({
  name: 'BootstrapPagination',
  components: { BPagination },
  props: bootstrapPaginationProps,
  emits: ['update:model'],

  template: `
    <BPagination v-bind="$attrs" :value="model" @change="$emit('update:model', $event)" />
  `
})
