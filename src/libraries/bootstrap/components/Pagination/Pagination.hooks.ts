// Copyright © 2021 Move Closer

import { ComponentObjectPropsOptions } from '../../../../contracts'

import { BootstrapPaginationProps } from './Pagination.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapPaginationProps: ComponentObjectPropsOptions<BootstrapPaginationProps> = {
  model: {
    type: Number,
    required: true
  }
}
