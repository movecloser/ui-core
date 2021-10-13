// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'

import { HasSize } from '../../../../../composables'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixModalProps extends HasSize, Data {
  contentClass: string;
  isOpen: boolean;
}
