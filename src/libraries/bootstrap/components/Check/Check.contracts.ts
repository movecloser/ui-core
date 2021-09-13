// Copyright © 2021 Move Closer

import { ComputedRef } from '@vue/composition-api'
import { VueConstructor } from 'vue'

import { AbstractCheckListProps, UseCheckControlProvides } from '../../../../abstract'
import { FormControlValue } from '../../../../contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export type BootstrapCheckProps = AbstractCheckListProps<FormControlValue>

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UseBootstrapCheckProvides extends UseCheckControlProvides<FormControlValue> {
  /**
   * Vue component that will be used to render the control's options.
   */
  component: ComputedRef<VueConstructor>
}
