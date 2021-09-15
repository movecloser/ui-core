// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { BootstrapImageProps } from './Image.contracts'
import { bootstrapImageProps, useBootstrapImage } from './Image.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapImage = defineComponent({
  name: 'BootstrapImage',
  props: bootstrapImageProps,

  setup (props: BootstrapImageProps) {
    const { component, sizes, _srcset } = useBootstrapImage(props)
    return { component, sizes, _srcset }
  },

  template: '<component :is="component" v-bind="{ alt, sizes, src }" :srcset="_srcset" />'
})
