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
    value: import("@vue/composition-api").WritableComputedRef<string | number | boolean>;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../../..").ComponentObjectPropsOptions<InputTypeaheadProps>, {} & {
    model?: any;
    name?: any;
    disabled?: any;
    size?: any;
    autofocus?: any;
    placeholder?: any;
    loading?: any;
    clearable?: any;
    isMulti?: any;
}, {}> & Pick<import("vue").VueConstructor<import("vue").default>, "filter" | "extend" | "nextTick" | "set" | "delete" | "directive" | "component" | "use" | "mixin" | "compile" | "observable" | "util" | "config" | "version"> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    model?: any;
    name?: any;
    disabled?: any;
    size?: any;
    autofocus?: any;
    placeholder?: any;
    loading?: any;
    clearable?: any;
    isMulti?: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    buttonTheme: typeof DashmixTheme;
    icons: typeof DashmixIconName;
    sizes: typeof SizeMap;
    value: import("@vue/composition-api").WritableComputedRef<string | number | boolean>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {} & {
    model?: any;
    name?: any;
    disabled?: any;
    size?: any;
    autofocus?: any;
    placeholder?: any;
    loading?: any;
    clearable?: any;
    isMulti?: any;
}, {}, true>);
