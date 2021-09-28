// Copyright © 2021 Move Closer

import { ComponentInternalInstance, computed, PropType } from '@vue/composition-api'
import { TranslateResult } from 'vue-i18n'
import { VueConstructor } from 'vue'

import { ComponentObjectPropsOptions } from '../../../../contracts'
import { getDSLConfig } from '../../../../helpers'

import { BootstrapDSLConfiguration } from '../../contracts'

import { BootstrapIconProps, UseBootstrapIconProvides } from './Icon.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapIconProps: ComponentObjectPropsOptions<BootstrapIconProps> = {
  color: {
    type: String,
    required: false,
    default: 'currentColor'
  },

  height: {
    type: [Number, String],
    required: false,
    default: '1em'
  },

  name: {
    type: String,
    required: false
  },

  title: {
    type: String as PropType<BootstrapIconProps['title']>,
    required: true
  },

  width: {
    type: [Number, String],
    required: false,
    default: '1em'
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useBootstrapIcon = (
  props: BootstrapIconProps,
  internalInstance: ComponentInternalInstance | null
): UseBootstrapIconProvides => {
  const dslConfig = getDSLConfig<BootstrapDSLConfiguration>()

  /**
   * @see UseBootstrapIconProvides.component
   */
  const component: UseBootstrapIconProvides['component'] = computed<VueConstructor | undefined>(() => {
    if (typeof dslConfig === 'undefined' || typeof dslConfig.icons === 'undefined') {
      return undefined
    }

    return dslConfig.icons[props.name]
  })

  /**
   * @see UseBootstrapIconProvides._title
   */
  const _title: UseBootstrapIconProvides['_title'] = computed<string | TranslateResult>(() => {
    if (internalInstance === null) {
      console.error('useBootstrapIcon(): FATAL ERROR! Failed to resolve the component instance! Using the value of the [title] prop as-is.')
      return props.title
    }

    const hasTranslation: boolean = internalInstance.proxy.$te(`dsl.icons.${props.title}`)
    if (hasTranslation) {
      return internalInstance.proxy.$t(`dsl.icons.${props.title}`)
    } else {
      console.warn(`useBootstrapIcon(): Translation for [dsl.icons.${props.title}] does not exist. Using the value of the [title] prop as-is.`)
      return props.title
    }
  })

  return { component, _title }
}
