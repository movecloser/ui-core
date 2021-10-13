// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'

import { HasSize } from '../../../../../composables'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixSelectItem {
  label: string;
  value: unknown;
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
export enum DashmixSelectStyle {
  Default = ''
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixSelectProps extends HasSize, Data {
  autocomplete: string;
  clearable: boolean;
  disabled: boolean;
  filterBy: () => unknown;
  loading: boolean;
  model: unknown | undefined;
  multiple: boolean;
  options: DashmixSelectItem[];
  placeholder: string;
  searchable: boolean;
  taggable: boolean;
}
