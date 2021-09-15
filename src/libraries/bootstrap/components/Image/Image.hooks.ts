// Copyright © 2021 Move Closer

import { BImg, BImgLazy } from 'bootstrap-vue'
import { computed } from '@vue/composition-api'
import { VueConstructor } from 'vue'

import { abstractImageProps, useSrcSet } from '../../../../abstract'
import { ComponentObjectPropsOptions } from '../../../../contracts'

import { BootstrapImageProps, UseBootstrapImageProvides } from './Image.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapImageProps: ComponentObjectPropsOptions<BootstrapImageProps> = abstractImageProps

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useBootstrapImage = (props: BootstrapImageProps): UseBootstrapImageProvides => {
  const { sizes, _srcset } = useSrcSet(props)

  /**
   * @see UseBootstrapImageProvides.component
   */
  const component: UseBootstrapImageProvides['component'] =
    computed<VueConstructor>(() => props.lazy ? BImgLazy : BImg)

  return { component, sizes, _srcset }
}
