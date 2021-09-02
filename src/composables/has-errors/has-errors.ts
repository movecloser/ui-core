// Copyright © 2021 Move Closer

import { computed, ComputedRef, PropType, Ref } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../contracts'

import { HasErrors } from './has-errors.contracts'

/**
 * Props partial.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const hasErrorsProp: ComponentObjectPropsOptions<HasErrors> = {
  errors: {
    type: Array as PropType<string[]>,
    required: false,
    default: () => []
  }
}

/**
 * @param errors - Component's `errors` reactive reference.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useHasErrors = (errors: Ref<string[]>): ComputedRef<boolean> => {
  /**
   * Determines whether the control has any validation errors.
   */
  return computed<boolean>(() => Array.isArray(errors.value) && errors.value.length > 0)
}
