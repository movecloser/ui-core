// Copyright © 2021 Move Closer

import { ComponentObjectPropsOptions } from '../../../../contracts'
import { getAbstractButtonProps } from '../../../../abstract'

import { BootstrapButtonProps } from './Button.contracts'
import { BootstrapTheme } from '../../common'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapButtonProps: ComponentObjectPropsOptions<BootstrapButtonProps> = {
  ...getAbstractButtonProps<BootstrapTheme>()
}
