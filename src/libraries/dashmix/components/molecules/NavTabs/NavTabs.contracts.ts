// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'

import { CanBeDisabled } from '../../../../../composables'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixNavTab {
  disabled?: boolean;
  id: string;
  label: string;
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixNavTabsProps extends CanBeDisabled, Data {
  active: string;
  hasDefaultBackground: boolean;
  items: DashmixNavTab[];
  justify: boolean;
  scrollable: boolean;
}
