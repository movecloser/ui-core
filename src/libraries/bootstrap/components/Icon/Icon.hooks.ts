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
    required: false
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
    /**
     * Determines whether the component has been provided with the correct `title` prop.
     */
    const hasTitle: boolean = typeof props.title === 'string' && props.title.length > 0

    if (internalInstance === null) {
      console.error('useBootstrapIcon(): FATAL ERROR! Failed to resolve the component instance!')

      if (!hasTitle) {
        return ''
      }

      console.error('Using the value of the [title] prop as-is.')
      return props.title
    }

    if (!hasTitle) {
      console.warn(
        'useBootstrapIcon(): The value for the title prop has not been provided. Falling back to the generic translation.')
      return internalInstance.proxy.$t('_.icon')
    }

    /**
     * Determines whether the VueI18n plugin has found an applicable translation
     * for the `dsl.icons.[props.title]` translation key.
     */
    const hasTranslation: boolean = internalInstance.proxy.$te(`dsl.icons.${props.title}`)

    if (!hasTranslation) {
      console.warn(`useBootstrapIcon(): Translation for [dsl.icons.${props.title}] does not exist. Using the value of the [title] prop as-is.`)
      return props.title
    }

    return internalInstance.proxy.$t(`dsl.icons.${props.title}`)
  })

  return { _title, component }
}
