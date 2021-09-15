// Copyright © 2021 Move Closer

import { ComputedRef } from '@vue/composition-api'
import { VueConstructor } from 'vue'

import { AbstractCheckListProps, UseCheckControlProvides } from '../../../../abstract'
import { FormControlModelType } from '../../../../contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export type BootstrapCheckProps = AbstractCheckListProps<FormControlModelType>

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UseBootstrapCheckProvides extends UseCheckControlProvides<FormControlModelType> {
  /**
   * Vue component that will be used to render the control's options.
   */
  component: ComputedRef<VueConstructor>
}
