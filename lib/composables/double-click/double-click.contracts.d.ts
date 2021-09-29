import { ComputedRef } from '@vue/composition-api';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DoubleClick {
    clickPeriod: number;
    doubleClick: boolean;
}
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare type DoubleClickCallback = () => void;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseDoubleClickProvides {
    handleClick: () => void;
    isPendingClick: ComputedRef<boolean>;
}
