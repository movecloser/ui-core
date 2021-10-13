// Copyright © 2021 Move Closer

import { PropType, SetupContext, toRefs } from '@vue/composition-api'

import { ComponentObjectPropsOptions, FormControlModelType } from '../../../../../contracts'
import { getAbstractCheckListProps, useCheckControl } from '../../../../../abstract'
import {
  useHasErrors,
  useIsValid,
  useSizeClass,
  useThemeClass,
  useValidMarkerClass
} from '../../../../../composables'

import { DashmixTheme, dashmixValidationClassRegistry } from '../../../contracts'

import { DashmixCheckListProps } from './CheckList.contracts'
import { dashmixCheckSizeRegistry, dashmixCheckThemeRegistry } from '../../atoms/Check/Check.config'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixCheckListProps: ComponentObjectPropsOptions<DashmixCheckListProps> = {
  ...getAbstractCheckListProps<FormControlModelType>(),

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
export const useDashmixCheckList = (props: DashmixCheckListProps, ctx: SetupContext) => {
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
    themeClass,
    sizeClass,
    validationClass
  }
}
