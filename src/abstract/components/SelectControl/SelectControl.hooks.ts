// Copyright © 2021 Move Closer

import { PropType, SetupContext, toRefs } from '@vue/composition-api'

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
  AbstractSelectControlOption,
  AbstractSelectControlProps,
  UseSelectControlProvides
} from './SelectControl.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const getAbstractSelectControlProps = <ModelType>():
  ComponentObjectPropsOptions<AbstractSelectControlProps<ModelType>> => ({
    ...abstractBaseControlProps,

    options: {
      type: Array as PropType<AbstractSelectControlOption[]>,
      required: true
    }
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
export const useSelectControl = <ModelType>(
  props: AbstractSelectControlProps<ModelType>,
  ctx: SetupContext,
  sizeRegistry: SizeRegistry,
  validClassMap: ValidationClassMap = defaultValidationClassMap
): UseSelectControlProvides<ModelType> => {
  const { errors, valid, model, size } = toRefs(props)

  const hasErrors = useHasErrors(errors)

  const sizeClass = useSizeClass(size, sizeRegistry)

  const isValid = useIsValid(hasErrors, valid)
  const validationClass = useValidMarkerClass(isValid, validClassMap)

  const value = useSyncModel<ModelType>(model, ctx)

  return { hasErrors, sizeClass, validationClass, value }
}
