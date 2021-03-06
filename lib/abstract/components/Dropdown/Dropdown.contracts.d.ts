import { ComputedRef, Data, Ref } from '@vue/composition-api';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare type DropdownAlignment = DropdownAlignmentMap.Left | DropdownAlignmentMap.Right;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare enum DropdownAlignmentMap {
    Left = "left",
    Right = "right"
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
export declare type DropdownItemType = 'divider' | 'item';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare enum DropdownItemTypeMap {
    Divider = "divider",
    Item = "item"
}
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare type DropdownPosition = 'bottom' | 'left' | 'right' | 'top';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare enum DropdownPositionMap {
    Down = "bottom",
    Left = "left",
    Right = "right",
    Up = "top"
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
