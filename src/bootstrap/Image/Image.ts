// Copyright © 2021 Move Closer

import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import { computed, defineComponent, inject, SetupContext } from '@vue/composition-api'

import { useImage } from '../../_abstract'

import { BootstrapImageProps } from './Image.contracts'
import { FALLBACK_IMG_BASE64 } from './Image.config'
import { bootstrapImageProps } from './Image.hooks'

Vue.use(VueLazyload, {
  adapter: {
    loaded ({ el }: { el: HTMLElement }) {
      const srcset = el.getAttribute('data-srcset')
      if (srcset) {
        el.setAttribute('srcset', srcset)
      }
    }
  },
  attempt: 1,
  preLoad: 2.5
})

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const BootstrapImage = defineComponent({
  name: 'BootstrapImage',
  props: bootstrapImageProps,
  emits: ['error', 'load'],

  setup (props: BootstrapImageProps, ctx: SetupContext) {
    /**
     * Source for the fallback image (in case of the main image load error).
     */
    const fallbackImage = computed<string>(
      () => typeof props.fallback === 'string' ? props.fallback : FALLBACK_IMG_BASE64
    )

    /**
     * Source for the loading image (until the target image loads).
     */
    const loadingImage = computed<string>(
      () => typeof props.loading === 'string' ? props.loading : FALLBACK_IMG_BASE64
    )

    /**
     * Determine if image should be lazy loaded.
     */
    const globalLazy = inject<boolean>('lazyImages', true)
    const shouldBeLazy = computed<boolean>(
      () => globalLazy && props.isLazy
    )

    const { imgAlt, imgSrc, onError, onLoad } = useImage(props, ctx, fallbackImage.value)

    return { fallbackImage, imgAlt, imgSrc, loadingImage, onError, onLoad, shouldBeLazy }
  },

  template: `
    <img v-if="shouldBeLazy" v-lazy="{ src: imgSrc, error: fallbackImage, loading: loadingImage }"
         v-bind="{ sizes }" :data-srcset="srcset" :alt="imgAlt" class="img">
    <img v-else :src="imgSrc" v-bind="{ srcset, sizes }" :alt="imgAlt"
         @error="onError" @load="onLoad" class="img">
  `
})
