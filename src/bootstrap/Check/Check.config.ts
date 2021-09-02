// Copyright © 2021 Move Closer

import { SizeMap, SizeRegistry } from '../../_composables'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapCheckSizeRegistry: SizeRegistry = {
  [SizeMap.Small]: '--small',
  [SizeMap.Medium]: '--medium',
  [SizeMap.Large]: '--large'
}
