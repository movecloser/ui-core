// Copyright © 2021 Move Closer

import { SizeMap, SizeRegistry, ThemeRegistry } from '../../../../../composables'

import { DashmixTheme } from '../../../contracts'

import { DashmixButtonVariantMap } from './Button.contract'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const dashmixButtonSizeRegistry: SizeRegistry = {
  [SizeMap.Large]: 'btn-lg',
  [SizeMap.Medium]: '',
  [SizeMap.Small]: 'btn-sm',
  [SizeMap.XLarge]: 'btn-lg',
  [SizeMap.XSmall]: 'btn-sm'
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixButtonThemeClassRegistry: ThemeRegistry<DashmixTheme> = {
  [DashmixTheme.Default]: '-primary',
  [DashmixTheme.Danger]: '-danger',
  [DashmixTheme.Dark]: '-dark',
  [DashmixTheme.Info]: '-info',
  [DashmixTheme.Light]: '-light',
  [DashmixTheme.Primary]: '-primary',
  [DashmixTheme.Success]: '-success',
  [DashmixTheme.Warning]: '-warning'
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixButtonVariantClassRegistry: ThemeRegistry<DashmixButtonVariantMap> = {
  [DashmixButtonVariantMap.Alt]: '-alt',
  [DashmixButtonVariantMap.Default]: '',
  [DashmixButtonVariantMap.Hero]: '-hero',
  [DashmixButtonVariantMap.Icon]: '-icon',
  [DashmixButtonVariantMap.Outline]: '-outline',
  [DashmixButtonVariantMap.None]: '-none'
}
