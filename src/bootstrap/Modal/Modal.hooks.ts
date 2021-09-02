// Copyright © 2021 Move Closer

import { SetupContext } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../_contracts'
import { abstractModalProps, useModal } from '../../_abstract'

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
