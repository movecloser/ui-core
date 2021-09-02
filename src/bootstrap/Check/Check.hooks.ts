// Copyright © 2021 Move Closer

import { PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions, FormControlValue } from '../../_contracts'
import { getAbstractCheckListProps } from '../../_abstract'

import { BootstrapCheckProps } from './Check.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapCheckProps: ComponentObjectPropsOptions<BootstrapCheckProps> = {
  ...getAbstractCheckListProps<FormControlValue>(),

  className: {
    type: String as PropType<string|undefined>,
    required: false
  }
}
