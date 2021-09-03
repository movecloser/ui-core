// Copyright © 2021 Move Closer

import { PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../_contracts'

import { CanBeDisabled } from './can-be-disabled.contracts'

/**
 * Props partial.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const canBeDisabledProps: ComponentObjectPropsOptions<CanBeDisabled> = {
  disabled: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false
  }
}
