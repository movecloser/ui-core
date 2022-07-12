import { DashmixIconName } from '../Icon';
import { DashmixSelectProps } from './Select.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const DashmixSelect: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    _model: import("@vue/composition-api").WritableComputedRef<import("./Select.contracts").DashmixSelectItem | import("./Select.contracts").DashmixSelectItem[] | undefined>;
    sizeClass: import("../../../../..").UseSizeClassProvides;
    isSimpleLabel: import("@vue/composition-api").ComputedRef<boolean>;
    withPopper: (dropdownList: HTMLUListElement, component: any, { width }: import("./Select.contracts").CalculatedPosition) => (() => void) | undefined;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../..").ComponentObjectPropsOptions<DashmixSelectProps>, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}> & Pick<import("vue").VueConstructor<import("vue").default>, "filter" | "extend" | "nextTick" | "set" | "delete" | "directive" | "component" | "use" | "mixin" | "compile" | "observable" | "util" | "config" | "version"> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    [x: string]: any;
    [x: number]: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    _model: import("@vue/composition-api").WritableComputedRef<import("./Select.contracts").DashmixSelectItem | import("./Select.contracts").DashmixSelectItem[] | undefined>;
    sizeClass: import("../../../../..").UseSizeClassProvides;
    isSimpleLabel: import("@vue/composition-api").ComputedRef<boolean>;
    withPopper: (dropdownList: HTMLUListElement, component: any, { width }: import("./Select.contracts").CalculatedPosition) => (() => void) | undefined;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}, true>);
