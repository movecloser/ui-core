// Copyright © 2021 Move Closer

import { ComputedRef, Ref } from '@vue/composition-api'

import { DropdownProps } from '../../../../../abstract/components/Dropdown'

import { Size } from '../../../../../composables'

import { DashmixTheme } from '../../../contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixDropdownProps extends DropdownProps {
  triggerSize: Size;
  triggerTheme: DashmixTheme;
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseDashmixDropDownProvides {
  close: () => void;
  dropdown: Ref<null | HTMLElement>;
  dropdownClass: ComputedRef<string>;
  dropdownMenuClass: ComputedRef<string>;
  isOpen: Ref<boolean>;
  open: () => void;
  toggle: () => void;
  trigger: Ref<null | Vue>;
}

export enum PopperPositions {
  Auto = 'auto',
  AutoStart = 'auto-start',
  AutoEnd = 'auto-end',
  Top = 'top',
  TopStart = 'top-start',
  TopEnd = 'top-end',
  Bottom = 'bottom',
  BottomStart = 'bottom-start',
  BottomEnd = 'bottom-end',
  Right = 'right',
  RightStart = 'right-start',
  RightEnd = 'right-end',
  Left = 'left',
  LeftStart = 'left-start',
  LeftEnd = 'left-end'
}
