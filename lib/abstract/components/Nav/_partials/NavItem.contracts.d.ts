import { Data } from '@vue/composition-api';
import { CanBeDisabled } from '../../../../composables';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface AbstractNavItem extends CanBeDisabled {
    /**
     * Unique ID of the given item. Needed to correctly switch between different items.
     */
    id: string;
    /**
     * Item's label.
     */
    label: string;
}
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare enum AbstractNavItemTag {
    Anchor = "a",
    Button = "button"
}
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface AbstractNavItemProps extends Data, AbstractNavItem {
    /**
     * Determines whether the item is the currently-active one.
     */
    active: boolean;
    /**
     * HTML tag that the item should be built on.
     */
    tag: AbstractNavItemTag;
}
