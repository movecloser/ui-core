// Copyright © 2021 Move Closer

import { ComputedRef } from '@vue/composition-api'
import { VueConstructor } from 'vue'

import { AbstractImageProps, UseSrcSetProvides } from '@/shared/dsl/src/abstract/components/Image'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type BootstrapImageProps = AbstractImageProps

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UseBootstrapImageProvides extends UseSrcSetProvides {
  /**
   * Vue component that will be used to render the image.
   */
  component: ComputedRef<VueConstructor>
}
