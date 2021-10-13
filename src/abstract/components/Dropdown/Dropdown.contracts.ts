// Copyright © 2021 Move Closer

import { ComputedRef, Data, Ref } from '@vue/composition-api'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export type DropdownAlignment = DropdownAlignmentMap.Left | DropdownAlignmentMap.Right

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export enum DropdownAlignmentMap {
  Left = 'left',
  Right = 'right'
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DropdownItem {
  icon?: string;
  label?: string;
  onClick?: () => void | Promise<void>;
  theme?: string;
  type: DropdownItemType;
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DropdownItemProps {
  item: DropdownItem;
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export type DropdownItemType = 'divider' | 'item'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export enum DropdownItemTypeMap {
  Divider = 'divider',
  Item = 'item'
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export type DropdownPosition = 'down' | 'left' | 'right' | 'up'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export enum DropdownPositionMap {
  Down = 'down',
  Left = 'left',
  Right = 'right',
  Up = 'up'
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DropdownProps extends Data {
  align: DropdownAlignment;
  icon: string | null;
  items: DropdownItem[];
  label: string;
  openOnMount: boolean;
  position: DropdownPosition;
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseDropdownProvides {
  close: () => void;
  hasCustomTrigger: ComputedRef<boolean>;
  isOpen: Ref<boolean>;
  open: () => void;
  toggle: () => void;
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseDropdownItemProvides {
  isClickable: ComputedRef<boolean>;
  isLoading: Ref<boolean>;
  onClick: () => void;
}
