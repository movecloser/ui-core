// Copyright © 2021 Move Closer

import { computed, SetupContext } from '@vue/composition-api'
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

  width: {
    type: [Number, String],
    required: false,
    default: '1em'
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useBootstrapIcon = (props: BootstrapIconProps): UseBootstrapIconProvides => {
  const dslConfig = getDSLConfig<BootstrapDSLConfiguration>()

  const component: UseBootstrapIconProvides['component'] = computed<VueConstructor | undefined>(() => {
    if (typeof dslConfig === 'undefined' || typeof dslConfig.icons === 'undefined') {
      return undefined
    }

    return dslConfig.icons[props.name]
  })

  return { component }
}
