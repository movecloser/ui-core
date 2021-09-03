// Copyright © 2021 Move Closer

import { ComponentObjectPropsOptions } from '../../../../contracts'

import { getThemePropDefinition } from '../../composables'

import { BootstrapBadgeProps } from './Badge.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapBadgeProps: ComponentObjectPropsOptions<BootstrapBadgeProps> = {
  theme: getThemePropDefinition()
}
