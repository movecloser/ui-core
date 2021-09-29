import { ComputedRef } from '@vue/composition-api';
export declare const defaultValidationClassMap: ValidationClassMap;
export interface ValidationClassMap {
    invalid: string;
    valid: string;
}
export declare type UseValidMarkerProvides = ComputedRef<string>;
