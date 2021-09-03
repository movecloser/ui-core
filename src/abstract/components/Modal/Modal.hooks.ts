// Copyright © 2021 Move Closer

import { SetupContext } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../_contracts'

import { AbstractModalProps, UseModalProvides } from './Modal.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const abstractModalProps: ComponentObjectPropsOptions<AbstractModalProps> = {
  closable: {
    type: Boolean,
    required: false,
    default: true
  },

  open: {
    type: Boolean,
    required: true,
    default: false
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useModal = (props: AbstractModalProps, ctx: SetupContext): UseModalProvides => {
  const { emit } = ctx

  /**
   * Emits the `@close` event to the parent component.
   */
  const close = (): void => { emit('close') }

  return { close }
}
