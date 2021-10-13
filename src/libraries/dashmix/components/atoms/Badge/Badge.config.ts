// Copyright © 2021 Move Closer

import { DashmixTheme } from '../../../contracts'
import { ThemeRegistry } from '../../../../../composables'

import { DashmixBadgeShape, DashmixBadgeVariantMap } from './Badge.contracts'

export const dashmixBadgeShapeRegistry: ThemeRegistry<DashmixBadgeShape> = {
  [DashmixBadgeShape.Pill]: 'badge-pill',
  [DashmixBadgeShape.Rectangle]: ''
}

export const dashmixBadgeThemeRegistry: ThemeRegistry<DashmixTheme> = {
  [DashmixTheme.Default]: '-primary',
  [DashmixTheme.Danger]: '-danger',
  [DashmixTheme.Dark]: '-dark',
  [DashmixTheme.Info]: '-info',
  [DashmixTheme.Light]: '-light',
  [DashmixTheme.Primary]: '-primary',
  [DashmixTheme.Success]: '-success',
  [DashmixTheme.Warning]: '-warning'
}

export const dashmixBadgeVariantRegistry: ThemeRegistry<DashmixBadgeVariantMap> = {
  [DashmixBadgeVariantMap.Alt]: '-alt',
  [DashmixBadgeVariantMap.Default]: ''
}
