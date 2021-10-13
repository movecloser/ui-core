// Copyright © 2021 Move Closer

import { CanBeDisabled, HasSize } from '../../../../../../composables'

export interface InputTypeaheadProps extends CanBeDisabled, HasSize {
  autofocus: boolean
  clearable: boolean
  isMulti: boolean
  loading: boolean
  model: string
  name: string
  placeholder: string
}
