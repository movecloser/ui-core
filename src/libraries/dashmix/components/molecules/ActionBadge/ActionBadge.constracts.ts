// Copyright © 2021 Move Closer

import { Size } from '../../../../../composables'

import { DashmixBadgeProps, DashmixBadgeVariant, DashmixIconName } from '../../atoms'

export interface ActionBadgeProps extends DashmixBadgeProps {
  buttonSize: Size
  disabled: boolean
  icon: DashmixIconName
  variant: DashmixBadgeVariant
}
