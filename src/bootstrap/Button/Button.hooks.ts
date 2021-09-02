// Copyright © 2021 Move Closer

import { ComponentObjectPropsOptions } from '../../_contracts'
import { getAbstractButtonProps } from '../../_abstract'

import { BootstrapButtonProps } from './Button.contracts'
import { BootstrapTheme } from '../common'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapButtonProps: ComponentObjectPropsOptions<BootstrapButtonProps> = {
  ...getAbstractButtonProps<BootstrapTheme>()
}
