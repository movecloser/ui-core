// Copyright © 2021 Move Closer

import { computed, PropType, SetupContext, toRefs } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../contracts'
import {
  defaultValidationClassMap,
  SizeRegistry,
  useHasErrors,
  useIsValid,
  useSizeClass,
  useSyncModel,
  useValidMarkerClass,
  ValidationClassMap
} from '../../../composables'

import { abstractBaseControlProps } from '../InputControl'
import {
  AbstractCheckControlOption,
  AbstractCheckControlProps,
  AbstractCheckControlType,
  AbstractCheckControlValueType,
  AbstractCheckListProps,
  UseCheckControlProvides
} from './CheckControl.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const getAbstractCheckControlProps = <ValueType> ():
  ComponentObjectPropsOptions<AbstractCheckControlProps<ValueType>> => ({
    ...abstractBaseControlProps,
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
export const getAbstractCheckListProps = <ValueType> ():
  ComponentObjectPropsOptions<AbstractCheckListProps<ValueType>> => ({
    ...abstractBaseControlProps,

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
      type: Array as PropType<AbstractCheckControlOption<ValueType>[]>,
      required: true
    }
  })

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useCheckControl = <ValueType> (
  props: AbstractCheckControlProps<ValueType> | AbstractCheckListProps<ValueType>,
  ctx: SetupContext
): UseCheckControlProvides<ValueType> => {
  const { model, multiple } = toRefs(props)

  const checked = useSyncModel<AbstractCheckControlValueType<ValueType>>(model, ctx)
  const checkType = computed<AbstractCheckControlType>(() => multiple.value ? 'checkbox' : 'radio')

  return { checked, checkType }
}
