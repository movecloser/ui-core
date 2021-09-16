// Copyright © 2021 Move Closer

import { ComponentObjectPropsOptions } from '../../../../../contracts'

import { LinkContentProps } from './LinkContent.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const linkContentProps: ComponentObjectPropsOptions<LinkContentProps> = {
  label: {
    type: String,
    required: false
  }
}
