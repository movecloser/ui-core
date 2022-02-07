// Copyright © 2022 Move Closer

import { Data } from '@vue/composition-api'
import { VueConstructor } from 'vue'

import { CanBeDisabled } from '../../../../../../composables'

/**
 * @author Olga Milczek <jan.dobrowolski@movecloser.pl>
 */
export interface DashmixNavTabItem {

  /**
   * Determines whether the tab is the currently active one.
   */
  active?: boolean;

  disabled?: boolean;

  /**
   * Tab id.
   */
  id: string | number
  /**
   * Tab's label.
   */
  label: string | VueConstructor;
  /**
   * Index of tab.
   */
  index?: number;
  /**
   * Properties of label component.
   */
  props?: Data;
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixNavTabsItemProps extends DashmixNavTabItem, Data {
  /**
   * Determines whether the tab is the currently active one.
   */
  active: boolean;
  /**
   * Index of tab.
   */
  index: number;

  disabled: boolean;
  /**
   * Properties of label component.
   */
  props: Data;
}
