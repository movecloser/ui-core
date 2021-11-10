// Copyright © 2021 Move Closer

import { SetupContext, toRefs } from '@vue/composition-api'

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
export const getAbstractBaseControlProps = <ModelType> (): ComponentObjectPropsOptions<FormControlBaseProps<ModelType>> => ({
  ...canBeDisabledProp,
  ...hasSizeProp,
  ...hasErrorsProp,

  /**
   * @inheritDoc
   */
  autocomplete: {
    type: String,
    required: false
  },

  /**
   * @inheritDoc
   */
  autofocus: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * @inheritDoc
   */
  label: {
    type: String,
    required: false
  },

  /**
   * @inheritDoc
   */
  model: { required: true },

  /**
   * @inheritDoc
   */
  name: {
    type: String,
    required: true
  },

  /**
   * @inheritDoc
   */
  placeholder: {
    type: String,
    required: false
  },

  /**
   * @inheritDoc
   */
  readonly: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * @inheritDoc
   */
  required: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * @inheritDoc
   */
  valid: {
    type: Boolean,
    required: false,
    default: null
  }
})

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const getAbstractInputControlProps = <ModelType> ():
  ComponentObjectPropsOptions<AbstractInputControlProps<ModelType>> => ({
  ...getAbstractBaseControlProps<ModelType>(),

  /**
   * @inheritDoc
   */
  autocomplete: {
    type: String,
    required: false
  },

  /**
   * @inheritDoc
   */
  autofocus: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * @inheritDoc
   */
  castAsNumber: {
    type: Boolean,
    required: false,
    default: false
  }
})

/**
 * @param props
 * @param ctx
 * @param sizeRegistry - Registry binding form control's size.
 * @param [validClassMap=defaultValidationClassMap] - TODO: Documentation.
 * @param [castAsNumber=false] - Determines whether the User's input should be automatically
 *   typecast as a `Number` (see: https://vuejs.org/v2/guide/forms.html#number).
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useInputControl = <ModelType> (
  props: AbstractInputControlProps<ModelType>,
  ctx: SetupContext,
  sizeRegistry: SizeRegistry,
  validClassMap: ValidationClassMap = defaultValidationClassMap,
  castAsNumber: boolean = false
): UseInputControlProvides<ModelType> => {
  const { errors, model, size, valid } = toRefs(props)

  const hasErrors = useHasErrors(errors)

  const sizeClass = useSizeClass(size, sizeRegistry)

  const isValid = useIsValid(hasErrors, valid)
  const validationClass = useValidMarkerClass(isValid, validClassMap)

  const value = useSyncModel<ModelType>(model, ctx, 'model', castAsNumber)

  return { hasErrors, sizeClass, validationClass, value }
}
