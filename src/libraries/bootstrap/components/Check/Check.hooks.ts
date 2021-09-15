// Copyright © 2021 Move Closer

import { BFormCheckboxGroup, BFormRadioGroup } from 'bootstrap-vue'
import { computed, SetupContext, toRefs } from '@vue/composition-api'
import { VueConstructor } from 'vue'

import { ComponentObjectPropsOptions, FormControlModelType } from '../../../../contracts'
import { getAbstractCheckListProps, useCheckControl } from '../../../../abstract'

import { BootstrapCheckProps, UseBootstrapCheckProvides } from './Check.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const bootstrapCheckProps: ComponentObjectPropsOptions<BootstrapCheckProps> = getAbstractCheckListProps<FormControlModelType>()

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useBootstrapCheck = (
  props: BootstrapCheckProps,
  ctx: SetupContext
): UseBootstrapCheckProvides => {
  const { multiple } = toRefs(props)

  const { checked, checkType } = useCheckControl(props, ctx)

  const component = computed<VueConstructor>(() => multiple.value ? BFormCheckboxGroup : BFormRadioGroup)

  return { checked, checkType, component }
}
