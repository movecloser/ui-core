// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'

import { HasSize } from '../../_composables'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface AbstractIconProps extends HasSize, Data {
  /**
   * The name (identifier) of the icon we want to render.
   */
  name: string;
}
