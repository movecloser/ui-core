// Copyright © 2021 Move Closer

import { ComponentObjectPropsOptions } from '../../../contracts'

import { AbstractImageProps } from './Image.contracts'

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
