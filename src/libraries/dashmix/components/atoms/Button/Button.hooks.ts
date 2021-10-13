// Copyright © 2021 Move Closer

import { computed, PropType, SetupContext, toRefs } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import {
  canBeDisabledProp,
  doubleClickProps,
  hasSizeProp,
  useDoubleClick,
  useSizeClass,
  useThemeClass
} from '../../../../../composables'

import { DashmixTheme } from '../../../contracts'

import { DashmixIconName } from '../Icon'

import {
  DashmixButtonProps,
  DashmixButtonVariant,
  DashmixButtonVariantMap
} from './Button.contract'
import {
  dashmixButtonSizeRegistry,
  dashmixButtonThemeClassRegistry,
  dashmixButtonVariantClassRegistry
} from './Button.config'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixButtonProps: ComponentObjectPropsOptions<DashmixButtonProps> = {
  ...canBeDisabledProp,
  ...doubleClickProps,
  ...hasSizeProp,

  /**
   * Show label on small screen
   */
  alwaysWithLabel: {
    type: Boolean,
    required: false,
    default: true
  },

  /**
   * Text shown to the User when he clicks the button for the 1st time.
   * In use only when the `doubleClick` prop is set to `true`.
   */
  confirmationText: {
    type: String,
    required: false,
    default: 'Czy na pewno?'
  },

  /**
   * Button's icon.
   */
  icon: {
    type: String as PropType<DashmixIconName>,
    required: false
  },

  /**
   * Button's label.
   */
  label: {
    type: String,
    required: false,
    default: ''
  },

  /**
   * Determines whether the component should display a loading indicator.
   */
  loading: {
    type: Boolean,
    required: false,
    default: false
  },

  /**
   * Button's theme (style variant).
   */
  theme: {
    type: String as PropType<DashmixTheme>,
    required: false,
    default: DashmixTheme.Primary
  },

  /**
   * Button's variant (style variant).
   */
  variant: {
    type: String as PropType<DashmixButtonVariant>,
    required: false,
    default: DashmixButtonVariantMap.Default
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function useDashmixButton (props: DashmixButtonProps, ctx: SetupContext) {
  const { size, theme, variant } = toRefs(props)

  const emitClick = (e?: Event): void => {
    ctx.emit('click', e)
  }

  const { handleClick, isPendingClick } = useDoubleClick(
    emitClick,
    props.doubleClick,
    props.clickPeriod
  )
  const sizeClass = useSizeClass(size, dashmixButtonSizeRegistry)

  const message = computed<string>(() => isPendingClick.value ? props.confirmationText
    : props.label)

  const themePart = useThemeClass(theme, dashmixButtonThemeClassRegistry)
  const variantPart = useThemeClass<DashmixButtonVariant>(
    variant,
    dashmixButtonVariantClassRegistry
  )
  const styleClass = computed<string>(() =>
    variant.value === DashmixButtonVariantMap.None
      ? `btn${variantPart.themeClass.value}`
      : `btn${variantPart.themeClass.value}${themePart.themeClass.value}`)

  return { handleClick, isPendingClick, message, sizeClass, styleClass }
}
