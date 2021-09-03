// Copyright © 2021 Move Closer

import { VueConstructor } from 'vue'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface BootstrapDSLConfiguration {
  /**
   * Available SVG icons.
   */
  icons?: Record<string, VueConstructor>

  /**
   * The string that should be used to prefix each component's name.
   *
   * @default "Bs"
   */
  prefix?: string;
}
