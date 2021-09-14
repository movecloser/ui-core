// Copyright © 2021 Move Closer

import { PropType, SetupContext, toRefs } from '@vue/composition-api'

import { ComponentObjectPropsOptions, FormControlBaseProps } from '../../../contracts'
import {
  canBeDisabledProp,
  defaultValidationClassMap,
  hasErrorsProp,
  hasSizeProp,
  SizeRegistry,
  useHasErrors,
  useIsValid,
  useSizeClass,
  useSyncModel,
  useValidMarkerClass,
  ValidationClassMap
} from '../../../composables'

import { AbstractInputControlProps, UseInputControlProvides } from './InputControl.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const abstractBaseControlProps: ComponentObjectPropsOptions<FormControlBaseProps> = {
  ...canBeDisabledProp,
  ...hasSizeProp,
  ...hasErrorsProp,

  label: {
    type: String,
    required: false
  },

  name: {
    type: String,
    required: true
  },

  placeholder: {
    type: String,
    required: false
  },

  readonly: {
    type: Boolean,
    required: false,
    default: false
  },

  required: {
    type: Boolean,
    required: false,
    default: false
  },

  valid: {
    type: Boolean,
    required: false,
    default: null
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const getAbstractInputControlProps = <ValueType>():
  ComponentObjectPropsOptions<AbstractInputControlProps<ValueType>> => ({
    ...abstractBaseControlProps,

    /**
     * Value for the `[autocomplete]` attribute.
     */
    autocomplete: {
      type: String,
      required: false
    },

    /**
     * Determines whether the control should be automatically focused.
     */
    autofocus: {
      type: Boolean,
      required: false,
      default: false
    },

    /**
     * Control's value, synced via `v-model`.
     */
    model: { required: true }
  })

/**
 * @param props
 * @param ctx
 * @param sizeRegistry - Registry binding form control's size.
 * @param validClassMap
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useInputControl = <ValueType>(
  props: AbstractInputControlProps<ValueType>,
  ctx: SetupContext,
  sizeRegistry: SizeRegistry,
  validClassMap: ValidationClassMap = defaultValidationClassMap
): UseInputControlProvides<ValueType> => {
  const { errors, valid, model, size } = toRefs(props)

  const hasErrors = useHasErrors(errors)

  const sizeClass = useSizeClass(size, sizeRegistry)

  const isValid = useIsValid(hasErrors, valid)
  const validationClass = useValidMarkerClass(isValid, validClassMap)

  const value = useSyncModel<ValueType>(model, ctx)

  return { hasErrors, sizeClass, validationClass, value }
}
