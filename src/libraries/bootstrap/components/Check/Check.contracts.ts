// Copyright © 2021 Move Closer

import { ComputedRef } from '@vue/composition-api'
import { VueConstructor } from 'vue'

import { AbstractCheckListProps, UseCheckControlProvides } from '../../../../abstract'
import { FormControlModelType } from '../../../../contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 * @author Maciej Perzankowski <maciej.perzankowski@movecloser.pl>
 */
export interface BootstrapCheckProps extends AbstractCheckListProps<FormControlModelType> {
  /**
   * Determines whether legend is visible.
   *
   * @default true
   *
   * @see https://bootstrap-vue.org/docs/components/form-group#form-group
   */
  isLegendVisible?: boolean

  /**
   * Determines whether the options should be stacked.
   *
   * @default false
   *
   * @see https://bootstrap-vue.org/docs/components/form-checkbox#inline-and-stacked-checkboxes
   */
  stacked: boolean
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UseBootstrapCheckProvides extends UseCheckControlProvides<FormControlModelType> {
  /**
   * Vue component that will be used to render the control's options.
   */
  component: ComputedRef<VueConstructor>

  /**
   * Determines whether the control contains any errors.
   */
  hasErrors: ComputedRef<boolean>

  /**
   * CSS class determining the control's validation state.
   */
  validationClass: ComputedRef<string>
}
