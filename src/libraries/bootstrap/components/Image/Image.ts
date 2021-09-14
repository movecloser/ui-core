// Copyright © 2021 Move Closer

import { BImg, BImgLazy } from 'bootstrap-vue'
import { defineComponent } from '@vue/composition-api'

import { bootstrapImageProps } from './Image.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapImage = defineComponent({
  name: 'BootstrapImage',
  components: { BImg, BImgLazy },
  props: bootstrapImageProps,

  template: `
    <BImgLazy v-if="lazy" v-bind="$props" />
    <BImg v-else v-bind="$props" />
  `
})
