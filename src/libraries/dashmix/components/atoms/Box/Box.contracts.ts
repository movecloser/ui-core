// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixBoxProps extends Data {
  bodyClass: string;
  footerClass: string;
  footerMode: DashmixBoxMode;
  headerClass: string;
  headerMode: DashmixBoxMode;
  noBodyPadding: boolean;
  shadow: boolean;
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export type DashmixBoxMode = 'clean' | 'divided'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export enum DashmixBoxModeMap {
  Clean = 'clean',
  Divided = 'divided'
}
