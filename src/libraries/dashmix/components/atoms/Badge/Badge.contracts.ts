// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'

import { DashmixTheme } from '../../../contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixBadgeProps extends Data {
  label: string;
  shape: DashmixBadgeShape;
  theme: DashmixTheme;
  variant: DashmixBadgeVariant;
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
export enum DashmixBadgeShape {
  Pill = 'pill',
  Rectangle = ''
}

export type DashmixBadgeVariant = DashmixBadgeVariantMap.Alt | DashmixBadgeVariantMap.Default

export enum DashmixBadgeVariantMap {
  Alt = 'alt',
  Default = 'default',
}
