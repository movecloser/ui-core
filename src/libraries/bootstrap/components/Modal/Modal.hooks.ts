// Copyright © 2021 Move Closer

import { SetupContext } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../contracts'
import { abstractModalProps, useModal } from '../../../../abstract'

import { BootstrapModalProps, UseBootstrapModalProvides } from './Modal.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapModalProps: ComponentObjectPropsOptions<BootstrapModalProps> = {
  ...abstractModalProps
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useBootstrapModal = (props: BootstrapModalProps, ctx: SetupContext): UseBootstrapModalProvides => {
  const { close } = useModal(props, ctx)
  return { close }
}
