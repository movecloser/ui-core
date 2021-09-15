// Copyright © 2021 Move Closer

import { computed, PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../contracts'

import { AbstractImageProps, SrcSet, UseSrcSetProvides } from './Image.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const abstractImageProps: ComponentObjectPropsOptions<AbstractImageProps> = {
  alt: {
    type: String,
    required: false,
    default: ''
  },

  lazy: {
    type: Boolean,
    required: false,
    default: true
  },

  src: {
    type: String,
    required: true
  },

  srcset: {
    type: Object as PropType<SrcSet>,
    required: false
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useSrcSet = (props: AbstractImageProps): UseSrcSetProvides => {
  if (typeof props.srcset === 'undefined') {
    return { _srcset: undefined, sizes: undefined }
  }

  /**
   * @see UseSrcSetProvides.sizes
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-sizes
   */
  const sizes: UseSrcSetProvides['sizes'] = computed<string>(() => {
    return Object.keys(props.srcset as SrcSet)
      .map<string>((width, index, arr) => {
        return index < arr.length - 1
          ? `(max-width: ${+width * 1.4}px) ${width}px`
          : `${width}px`
      })
      .join(', ')
  })

  /**
   * @see UseSrcSetProvides._srcset
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-srcset
   */
  const _srcset: UseSrcSetProvides['_srcset'] = computed<string>(() => {
    return Object.entries(props.srcset as SrcSet)
      .map<string>(([width, src]) => `${src} ${width}w`)
      .join(', ')
  })

  return { sizes, _srcset }
}
