// Copyright © 2022 Move Closer

import { SetupContext, toRef } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import { hasSizeProp, useSizeClass } from '../../../../../composables'

import { DashmixModalProps } from './Modal.contracts'
import { modalSizeRegistry } from './Modal.config'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixModalProps: ComponentObjectPropsOptions<DashmixModalProps> = {
  ...hasSizeProp,

  contentClass: {
    type: String,
    required: false,
    default: ''
  },
  isOpen: {
    type: Boolean,
    required: false,
    default: false
  },
  isScrollable: {
    type: Boolean,
    required: false,
    default: true
  }
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useDashmixModal = (props: DashmixModalProps, ctx: SetupContext) => {
  const close = () => {
    ctx.emit('close')
  }

  const sizeClass = useSizeClass(toRef(props, 'size'), modalSizeRegistry)

  return { close, sizeClass }
}
