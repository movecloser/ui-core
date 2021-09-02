// Copyright © 2021 Move Closer

import { PropType } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../_contracts'
import { getAbstractInputControlProps } from '../../_abstract'

import { BootstrapTextAreaProps, BootstrapTextAreaValueType } from './TextArea.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapTextAreaProps: ComponentObjectPropsOptions<BootstrapTextAreaProps> = {
  ...getAbstractInputControlProps<BootstrapTextAreaValueType>(),

  /**
   * Content for the `<label>` element.
   */
  label: {
    type: String as PropType<string>,
    required: false
  },

  /**
   * Value for the `[rows]` attribute of the main `<textarea>` element.
   * @default 5
   */
  rows: {
    type: Number as PropType<number>,
    required: false,
    default: 5
  }
}
