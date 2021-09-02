// Copyright © 2021 Move Closer

import { AbstractImageProps } from '../../_abstract'

/**
 * This enum is needed for better TypeScript experience
 * within the `Image.stories.ts` file.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export enum BootstrapImagePropNames {
  Fallback = 'fallback',
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface BootstrapImageProps extends AbstractImageProps {
  /**
   * Source for the fallback image (in case of the main image load error).
   */
  fallback?: string;

  /**
   * Source for the loading image (until the target image loads).
   */
  loading?: string;
}
