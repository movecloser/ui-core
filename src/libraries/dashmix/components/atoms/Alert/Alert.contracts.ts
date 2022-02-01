// Copyright © 2022 Move Closer

import { DashmixIconName } from '../Icon'

export interface DashmixAlertProps {
  autoTimeout: number | null
  dismissible: boolean
  icon: DashmixIconName | null
  showIcon: boolean
  theme: DashmixAlertTheme
  useDefaultIcon: boolean
}

export enum DashmixAlertTheme {
  Danger = 'danger',
  Info = 'info',
  Primary = 'primary',
  Success = 'success',
  Warning = 'warning'
}
