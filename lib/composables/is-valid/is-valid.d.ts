import { ComputedRef, Ref } from '@vue/composition-api';
/**
 * @param hasErrors - Component's `has errors` reactive reference.
 * @param valid - Component's `valid` reactive reference.
 *
 * @author Olga Milczek <olgaMilczke@movecloser.pl>
 */
export declare const useIsValid: (hasErrors: Ref<boolean>, valid: Ref<boolean>) => ComputedRef<boolean>;
