// Copyright © 2021 Move Closer

import { ComponentObjectPropsOptions } from '../../../contracts'

import { AbstractIconProps } from './Icon.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const abstractIconProps: ComponentObjectPropsOptions<AbstractIconProps> = {
  name: {
    type: String,
    required: true
  }
}
