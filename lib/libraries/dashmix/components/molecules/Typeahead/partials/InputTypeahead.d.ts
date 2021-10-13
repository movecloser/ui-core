import { SizeMap } from '../../../../../../composables';
import { DashmixTheme } from '../../../../contracts';
import { DashmixIconName } from '../../../atoms';
import { InputTypeaheadProps } from './InputTypeahead.contracts';
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const InputTypeahead: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    buttonTheme: typeof DashmixTheme;
    icons: typeof DashmixIconName;
    sizes: typeof SizeMap;
    value: import("@vue/composition-api").WritableComputedRef<import("../../../../../..").FormControlModelType>;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../../..").ComponentObjectPropsOptions<InputTypeaheadProps>, {} & {
    disabled?: any;
    size?: any;
    model?: any;
    autofocus?: any;
    name?: any;
    placeholder?: any;
    loading?: any;
    clearable?: any;
    isMulti?: any;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    disabled?: any;
    size?: any;
    model?: any;
    autofocus?: any;
    name?: any;
    placeholder?: any;
    loading?: any;
    clearable?: any;
    isMulti?: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    buttonTheme: typeof DashmixTheme;
    icons: typeof DashmixIconName;
    sizes: typeof SizeMap;
    value: import("@vue/composition-api").WritableComputedRef<import("../../../../../..").FormControlModelType>;
}>, import("@vue/composition-api").Data, {}, {}, {} & {
    disabled?: any;
    size?: any;
    model?: any;
    autofocus?: any;
    name?: any;
    placeholder?: any;
    loading?: any;
    clearable?: any;
    isMulti?: any;
}, {}, true>);
