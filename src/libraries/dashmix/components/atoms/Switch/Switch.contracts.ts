// Copyright © 2021 Move Closer

import { CanBeDisabled, HasSize } from '../../../../../composables'
import { DashmixTheme } from '../../../contracts'

import { DashmixSelectItem } from '../Select'

export interface SwitchesProps extends HasSize, CanBeDisabled {
  name: string
  options: DashmixSelectItem | DashmixSelectItem[]
  theme: DashmixTheme
  value: boolean | string
}
