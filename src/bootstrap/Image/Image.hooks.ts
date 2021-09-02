// Copyright © 2021 Move Closer

import { ComponentObjectPropsOptions } from '../../_contracts'
import { abstractImageProps } from '../../_abstract'

import { BootstrapImageProps } from './Image.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapImageProps: ComponentObjectPropsOptions<BootstrapImageProps> = {
  ...abstractImageProps,

  fallback: {
    type: String,
    required: false
  },

  loading: {
    type: String,
    required: false
  },

  sizes: {
    type: String,
    required: false
  },

  srcset: {
    type: String,
    required: false
  }
}
