// Copyright © 2021 Move Closer

import { PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../_contracts'
import { hasSizeProp } from '../../_composables'

import { AbstractIconProps } from './Icon.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const abstractIconProps: ComponentObjectPropsOptions<AbstractIconProps> = {
  ...hasSizeProp,

  /**
   * The name (identifier) of the icon we want to render.
   */
  name: {
    type: String as PropType<string>,
    required: true
  }
}
