// Copyright © 2021 Move Closer

import { Data, Ref } from '@vue/composition-api'

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
  isLazy: boolean;

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

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UseImageProvides {
  imgAlt: Ref<string>;
  imgSrc: Ref<string>;
  isLoaded: Ref<boolean>;
  onError: () => void;
  onLoad: () => void;
}
