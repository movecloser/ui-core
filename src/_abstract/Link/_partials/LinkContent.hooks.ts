// Copyright © 2021 Move Closer

import { ComponentObjectPropsOptions } from '../../../_contracts'

import { LinkContentProps } from './LinkContent.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const linkContentProps: ComponentObjectPropsOptions<LinkContentProps> = {
  /**
   * Link's label (text to render).
   */
  label: {
    type: String,
    required: false
  }
}
