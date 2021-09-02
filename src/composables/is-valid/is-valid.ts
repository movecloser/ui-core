// Copyright © 2021 Move Closer

import { computed, ComputedRef, Ref } from '@vue/composition-api'

/**
 * @param hasErrors - Component's `has errors` reactive reference.
 * @param valid - Component's `valid` reactive reference.
 *
 * @author Olga Milczek <olgaMilczke@movecloser.pl>
 */
export const useIsValid = (hasErrors: Ref<boolean>, valid: Ref<boolean>): ComputedRef<boolean> => {
  /**
   * Determines whether the control has any validation errors.
   */
  return computed<boolean>(() => {
    if (hasErrors.value) {
      return false
    }

    return valid.value
  })
}
