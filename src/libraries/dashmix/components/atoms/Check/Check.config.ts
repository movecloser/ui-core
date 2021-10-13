// Copyright © 2021 Move Closer

import { SizeMap, SizeRegistry, ThemeRegistry } from '../../../../../composables'

import { DashmixTheme } from '../../../contracts'

export const dashmixCheckSizeRegistry: SizeRegistry = {
  [SizeMap.Large]: 'custom-control-lg',
  [SizeMap.Medium]: '',
  [SizeMap.Small]: 'custom-control-sm',
  [SizeMap.XLarge]: 'custom-control-ls',
  [SizeMap.XSmall]: 'custom-control-sm'
}

export const dashmixCheckThemeRegistry: ThemeRegistry<DashmixTheme> = {
  [DashmixTheme.Default]: 'custom-control-primary',
  [DashmixTheme.Danger]: 'custom-control-danger',
  [DashmixTheme.Dark]: 'custom-control-dark',
  [DashmixTheme.Info]: 'custom-control-info',
  [DashmixTheme.Light]: 'custom-control-light',
  [DashmixTheme.Primary]: 'custom-control-primary',
  [DashmixTheme.Success]: 'custom-control-success',
  [DashmixTheme.Warning]: 'custom-control-warning'
}
