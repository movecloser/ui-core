// Copyright © 2021 Move Closer

import { ComponentObjectPropsOptions } from '../../../contracts'

import { AbstractBadgeProps } from './Badge.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const abstractBadgeProps: ComponentObjectPropsOptions<AbstractBadgeProps> = {
  /**
   * The HTML tag that should be used.
   */
  tag: {
    type: String,
    required: false,
    default: 'span'
  }
}
