// Copyright © 2021 Move Closer

import { SizeMap, SizeRegistry } from '../../_composables'

/**
 * The fallback icon that will be used if the `name` @Prop hasn't been defined
 */
export const BOOTSTRAP_FALLBACK_ICON = 'icon-like'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapIconSizeRegistry: SizeRegistry = {
  [SizeMap.Small]: '--small',
  [SizeMap.Medium]: '--medium',
  [SizeMap.Large]: '--large'
}
