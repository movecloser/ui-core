// Copyright © 2021 Move Closer

import { ComputedRef } from '@vue/composition-api'

export const defaultValidationClassMap: ValidationClassMap = {
  invalid: '--invalid',
  valid: '--valid'
}

export interface ValidationClassMap {
  invalid: string;
  valid: string;
}

export type UseValidMarkerProvides = ComputedRef<string>
