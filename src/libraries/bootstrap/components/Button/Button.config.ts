// Copyright © 2021 Move Closer

import { SizeRegistry, SizeMap, ThemeRegistry } from '../../../../composables'
import { BootstrapTheme } from '../../common'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapButtonSizeRegistry: SizeRegistry = {
  [SizeMap.Small]: 'btn-sm',
  [SizeMap.Medium]: '',
  [SizeMap.Large]: 'btn-lg'
}

export const bootstrapButtonThemeRegistry: ThemeRegistry<BootstrapTheme> = {
  [BootstrapTheme.Default]: '',
  [BootstrapTheme.Danger]: 'btn-danger',
  [BootstrapTheme.Dark]: 'btn-dark',
  [BootstrapTheme.Info]: 'btn-info',
  [BootstrapTheme.Light]: 'btn-light',
  [BootstrapTheme.Primary]: 'btn-primary',
  [BootstrapTheme.Success]: 'btn-success',
  [BootstrapTheme.Warning]: 'btn-warning'
}
