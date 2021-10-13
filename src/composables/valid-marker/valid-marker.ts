// Copyright © 2021 Move Closer

import { computed, ComputedRef } from '@vue/composition-api'
import {
  defaultValidationClassMap,
  UseValidMarkerProvides,
  ValidationClassMap
} from './valid-marker.contracts'

/**
 * @param isValid - Component's `isValid` reactive reference.
 * @param classMap
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useValidMarkerClass = (
  isValid: ComputedRef<boolean>,
  classMap: ValidationClassMap = defaultValidationClassMap
): UseValidMarkerProvides => {
  /**
   * The CSS class that handles the valid/invalid states of the (form)control.
   */
  return computed<string>(() => {
    return isValid.value ? classMap.valid : (isValid.value !== null ? classMap.invalid : '')
  })
}
