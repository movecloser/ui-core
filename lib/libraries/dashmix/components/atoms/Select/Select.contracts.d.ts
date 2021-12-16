import { AnyObject } from '@movecloser/front-core';
import { Data } from '@vue/composition-api';
import { VueConstructor } from 'vue';
import { HasSize } from '../../../../../composables';
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export interface CalculatedPosition {
    width: string;
    top: string;
    left: string;
}
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixSelectItem {
    label: string | SelectLabel;
    value: unknown;
}
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
export declare enum DashmixSelectStyle {
    Default = ""
}
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixSelectProps extends HasSize, Data {
    autocomplete: string;
    clearable: boolean;
    disabled: boolean;
    filterBy: () => unknown;
    loading: boolean;
    model: unknown | undefined;
    multiple: boolean;
    options: DashmixSelectItem[];
    placeholder: string;
    searchable: boolean;
    taggable: boolean;
    withDynamicPosition: boolean;
}
export interface SelectLabel {
    props: AnyObject;
    constructor: VueConstructor;
}
