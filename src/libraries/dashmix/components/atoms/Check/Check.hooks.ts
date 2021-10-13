// Copyright © 2021 Move Closer

import { PropType, SetupContext, toRefs } from '@vue/composition-api'

import { ComponentObjectPropsOptions, FormControlModelType } from '../../../../../contracts'
import { getAbstractCheckControlProps, useCheckControl } from '../../../../../abstract'
import {
  useHasErrors,
  useIsValid,
  useSizeClass,
  useThemeClass,
  useValidMarkerClass
} from '../../../../../composables'

import { DashmixTheme, dashmixValidationClassRegistry } from '../../../contracts'

import { DashmixCheckProps } from './Check.contracts'
import { dashmixCheckSizeRegistry, dashmixCheckThemeRegistry } from './Check.config'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixCheckProps: ComponentObjectPropsOptions<DashmixCheckProps> = {
  ...getAbstractCheckControlProps<FormControlModelType>(),

  /**
   * Color mode.
   */
  theme: {
    type: String as PropType<DashmixTheme>,
    required: false,
    default: DashmixTheme.Primary
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useDashmixCheck = (props: DashmixCheckProps, ctx: SetupContext) => {
  const { errors, valid, size, theme } = toRefs(props)

  const checkControl = useCheckControl(props, ctx)
  const themeClass = useThemeClass(theme, dashmixCheckThemeRegistry)

  const hasErrors = useHasErrors(errors)
  const isValid = useIsValid(hasErrors, valid)
  const sizeClass = useSizeClass(size, dashmixCheckSizeRegistry)
  const validationClass = useValidMarkerClass(isValid, dashmixValidationClassRegistry)


  const getFieldId = (index: number) => {
    return `${props.name}-${index}`
  }

  return {
    ...checkControl,
    getFieldId,
    themeClass: themeClass.themeClass,
    sizeClass,
    validationClass
  }
}
