// Copyright © 2021 Move Closer

import { ref, SetupContext } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../_contracts'

import { AbstractImageProps, UseImageProvides } from './Image.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const abstractImageProps: ComponentObjectPropsOptions<AbstractImageProps> = {
  alt: {
    type: String,
    required: false,
    default: ''
  },

  isLazy: {
    type: Boolean,
    required: false,
    default: true
  },

  sizes: {
    type: String,
    required: false
  },

  src: {
    type: String,
    required: true
  },

  srcset: {
    type: String,
    required: false
  }
}

/**
 * @param props
 * @param ctx
 * @param fallbackImage - The URL for the fallback image.
 * @param [loadCb?] - Callback function that will be called
 *  when the image file has been successfully loaded.
 * @param [errorCb?] - Callback function that will be called
 *  when the image file fails to load.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useImage = (
  props: AbstractImageProps,
  ctx: SetupContext,
  fallbackImage: string,
  loadCb?: () => unknown,
  errorCb?: () => unknown
): UseImageProvides => {
  const { emit } = ctx

  /**
   * Determines whether the `<img>` element has been successfully loaded.
   */
  const isLoaded = ref(false)

  /**
   * The value for the `[alt]` attribute.
   */
  const imgAlt = ref(props.alt)

  /**
   * The value for the `[src]` attribute.
   */
  const imgSrc = ref(props.src)

  /**
   * Renders the fallback image (in case of the load error).
   */
  const showFallbackImage = () => {
    imgAlt.value = ''
    imgSrc.value = fallbackImage
  }

  /**
   * Handles the @error event on the `<img>` element.
   */
  const onError = () => {
    emit('error')

    if (!props.isLazy) {
      showFallbackImage()
    }

    if (typeof errorCb === 'function') {
      errorCb()
    }
  }

  /**
   * Handles the @load event on the `<img>` element.
   */
  const onLoad = () => {
    if (isLoaded.value === true) {
      return
    }

    emit('load')

    isLoaded.value = true

    if (typeof loadCb === 'function') {
      loadCb()
    }
  }

  return { imgAlt, imgSrc, isLoaded, onError, onLoad }
}
