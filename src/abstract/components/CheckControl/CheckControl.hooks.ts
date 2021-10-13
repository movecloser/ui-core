// Copyright © 2021 Move Closer

import { computed, PropType, SetupContext, toRefs } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../contracts'
import { useSyncModel } from '../../../composables'

import { getAbstractBaseControlProps } from '../InputControl'
import {
  AbstractCheckControlModelType,
  AbstractCheckControlOption,
  AbstractCheckControlProps,
  AbstractCheckControlType,
  AbstractCheckListProps,
  UseCheckControlProvides
} from './CheckControl.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const getAbstractCheckControlProps = <ModelType> ():
  ComponentObjectPropsOptions<AbstractCheckControlProps<ModelType>> => ({
  ...getAbstractBaseControlProps<ModelType>(),

  /**
   * Id of check control.
   */
  id: {
    type: String,
    required: false,
    default: null
  },

  /**
   * Label to display next to control.
   */
  label: {
    type: String,
    required: false,
    default: null
  },

  /**
   * Control's value, synced via `v-model`.
   */
  model: { required: true },

  /**
   * Determines whether the control allows selection of more than one option.
   */
  type: {
    type: String as PropType<AbstractCheckControlType>,
    required: false,
    default: 'checkbox'
  },

  /**
   * Array of the options available to select.
   */
  value: {
    required: false,
    default: true
  }
})

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const getAbstractCheckListProps = <ModelType> ():
  ComponentObjectPropsOptions<AbstractCheckListProps<ModelType>> => ({
  ...getAbstractBaseControlProps<ModelType>(),

  /**
   * Control's value, synced via `v-model`.
   */
  model: { required: true },

  /**
   * Determines whether the control allows selection of more than one option.
   */
  multiple: {
    type: Boolean as PropType<boolean>,
    required: false,
    default: false
  },

  /**
   * Array of the options available to select.
   */
  options: {
    type: Array as PropType<AbstractCheckControlOption<ModelType>[]>,
    required: true
  }
})

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useCheckControl = <ModelType> (
  props: AbstractCheckControlProps<ModelType> | AbstractCheckListProps<ModelType>,
  ctx: SetupContext
): UseCheckControlProvides<ModelType> => {
  const { model, multiple } = toRefs(props)

  const checked = useSyncModel<AbstractCheckControlModelType<ModelType>>(model, ctx)
  const checkType = computed<AbstractCheckControlType>(() => multiple.value ? 'checkbox' : 'radio')

  return { checked, checkType }
}
