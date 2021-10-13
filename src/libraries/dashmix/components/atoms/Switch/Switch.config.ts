// Copyright © 2021 Move Closer

import { SizeMap } from '../../../../../composables'

import { DashmixTheme } from '../../../contracts'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const dashmixSwitchTheme: Record<DashmixTheme, string> = {
  [DashmixTheme.Danger]: 'custom-control-danger',
  [DashmixTheme.Info]: 'custom-control-info',
  [DashmixTheme.Primary]: 'custom-control-primary',
  [DashmixTheme.Success]: 'custom-control-success',
  [DashmixTheme.Warning]: 'custom-control-warning',
  [DashmixTheme.Dark]: 'custom-control-dark',
  [DashmixTheme.Light]: 'custom-control-light',
  [DashmixTheme.Default]: 'custom-control-primary'
}

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const dashmixSwitchSize: Record<SizeMap, string> = {
  [SizeMap.Large]: 'custom-control-lg',
  [SizeMap.Small]: '',
  [SizeMap.Medium]: '',
  [SizeMap.XLarge]: 'custom-control-lg',
  [SizeMap.XSmall]: ''
}
