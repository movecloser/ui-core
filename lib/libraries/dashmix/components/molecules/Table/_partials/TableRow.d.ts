import { TableRowProps } from '../../../../../../abstract/components/Table';
import { DashmixIconName } from '../../../atoms/Icon';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const DashmixTableRow: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    dropdownActions: import("@vue/composition-api").ComputedRef<import("../../../../../..").DropdownItem[]>;
    isSelected: import("@vue/composition-api").ComputedRef<boolean>;
    selected: import("@vue/composition-api").WritableComputedRef<unknown[]>;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../../..").ComponentObjectPropsOptions<TableRowProps>, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}> & Pick<import("vue").VueConstructor<import("vue").default>, "filter" | "extend" | "nextTick" | "set" | "delete" | "directive" | "component" | "use" | "mixin" | "compile" | "observable" | "util" | "config" | "version"> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    [x: string]: any;
    [x: number]: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    dropdownActions: import("@vue/composition-api").ComputedRef<import("../../../../../..").DropdownItem[]>;
    isSelected: import("@vue/composition-api").ComputedRef<boolean>;
    selected: import("@vue/composition-api").WritableComputedRef<unknown[]>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}, true>);
