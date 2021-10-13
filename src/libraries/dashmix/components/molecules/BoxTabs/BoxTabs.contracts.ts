// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'
import { VueConstructor } from 'vue'

import { CanBeDisabled } from '../../../../../composables'

import { DashmixBoxMode } from '../../atoms/Box'
import { DashmixNavTab } from '../NavTabs'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixBoxTabsProps extends CanBeDisabled, Data {
  active: string;
  footerClass: string;
  footerMode: DashmixBoxMode;
  items: DashmixBoxTabItem[];
  justifyTabs: boolean;
  noBodyPadding: boolean;
  scrollable: boolean;
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixBoxTabItem {
  component?: VueConstructor;
  props?: Data;
  tab: DashmixNavTab;
}
