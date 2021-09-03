// Copyright © 2021 Move Closer

import { PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../contracts'

import { CanBeDisabled } from './can-be-disabled.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const canBeDisabledProp: ComponentObjectPropsOptions<CanBeDisabled> = {
  disabled: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false
  }
}
