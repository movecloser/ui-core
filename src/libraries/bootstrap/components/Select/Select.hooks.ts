// Copyright © 2021 Move Closer

import { ComponentObjectPropsOptions } from '../../../../contracts'
import { getAbstractSelectControlProps } from '../../../../abstract'

import { BootstrapSelectModelType, BootstrapSelectProps } from './Select.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapSelectProps: ComponentObjectPropsOptions<BootstrapSelectProps> = {
  ...getAbstractSelectControlProps<BootstrapSelectModelType>()
}
