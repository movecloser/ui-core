// Copyright © 2022 Move Closer

import { computed, PropType, ref, SetupContext } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'

import { DashmixIconName } from '../Icon'

import { DashmixAlertProps, DashmixAlertTheme } from './Alert.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixAlertProps: ComponentObjectPropsOptions<DashmixAlertProps> = {
  autoTimeout: {
    type: Number,
    required: false,
    default: null
  },
  dismissible: {
    type: Boolean,
    required: false,
    default: false
  },
  icon: {
    type: String as PropType<DashmixIconName>,
    required: false,
    default: null
  },
  showIcon: {
    type: Boolean,
    required: false,
    default: true
  },
  theme: {
    type: String as PropType<DashmixAlertTheme>,
    required: false,
    default: DashmixAlertTheme.Info
  },
  useDefaultIcon: {
    type: Boolean,
    required: false,
    default: true
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useDashmixAlert = (props: DashmixAlertProps, ctx: SetupContext) => {
  const isOpen = ref<boolean>(true)

  const closeAlert = () => {
    isOpen.value = false
    ctx.emit('close')
  }

  const iconToDisplay = computed<DashmixIconName | null>(() => {
    if (!props.icon && props.useDefaultIcon) {
      switch (props.theme) {
        case DashmixAlertTheme.Danger:
          return DashmixIconName.ExclamationSolid
        case DashmixAlertTheme.Info:
          return DashmixIconName.InfoSolid
        case DashmixAlertTheme.Primary:
          return DashmixIconName.InfoSolid
        case DashmixAlertTheme.Success:
          return DashmixIconName.CheckSolid
        case DashmixAlertTheme.Warning:
          return DashmixIconName.ExclamationTriangleSolid
      }
    }

    return props.icon
  })

  if (props.autoTimeout) {
    setTimeout(() => closeAlert(), props.autoTimeout)
  }

  return { close: closeAlert, closeIcon: DashmixIconName.TimesSolid, iconToDisplay, isOpen }
}
