import { ComputedRef } from '@vue/composition-api';
import { UseValidMarkerProvides, ValidationClassMap } from './valid-marker.contracts';
/**
 * @param isValid - Component's `isValid` reactive reference.
 * @param classMap
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useValidMarkerClass: (isValid: ComputedRef<boolean>, classMap?: ValidationClassMap) => UseValidMarkerProvides;
