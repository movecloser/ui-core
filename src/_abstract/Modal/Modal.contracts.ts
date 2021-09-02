// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface AbstractModalProps extends Data {
  /**
   * Determines whether the modal should be closable.
   */
  closable: boolean;

  /**
   * Determines whether the modal should be open.
   */
  open: boolean;
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UseModalProvides {
  /**
   * Emits the `@close` event to the parent component.
   */
  close: () => void;
}
