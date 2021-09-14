// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface AbstractImageProps extends Data {
  /**
   * Value for the `<img>'s` `[alt]` attribute.
   */
  alt: string;

  /**
   * Determines whether the image should be lazy loaded.
   */
  lazy: boolean;

  /**
   * Value for the `<img>'s` `[sizes]` attribute.
   */
  sizes?: string;

  /**
   * Value for the `<img>'s` `[src]` attribute.
   */
  src: string;

  /**
   * Value for the `<img>'s` `[srcset]` attribute.
   */
  srcset?: string;
}
