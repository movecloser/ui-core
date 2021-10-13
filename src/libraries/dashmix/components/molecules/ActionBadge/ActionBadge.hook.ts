// Copyright © 2021 Move Closer
import { PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import { Size, SizeMap } from '../../../../../composables'

import {
  dashmixBadgeProps,
  DashmixBadgeVariant,
  DashmixBadgeVariantMap,
  DashmixIconName
} from '../../atoms'

import { ActionBadgeProps } from './ActionBadge.constracts'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const actionBadgeProps: ComponentObjectPropsOptions<ActionBadgeProps> = {
  ...dashmixBadgeProps,

  icon: {
    type: String as PropType<DashmixIconName>,
    required: true
  },
  buttonSize: {
    type: String as PropType<Size>,
    required: false,
    default: SizeMap.Small
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false
  },
  variant: {
    type: String as PropType<DashmixBadgeVariant>,
    required: false,
    default: DashmixBadgeVariantMap.Default
  }
}
