import { DashmixDropdownProps } from './Dropdown.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const DashmixDropdown: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    id: string;
    close: () => void;
    dropdown: import("@vue/composition-api").Ref<HTMLElement | null>;
    dropdownClass: import("@vue/composition-api").ComputedRef<string>;
    dropdownMenuClass: import("@vue/composition-api").ComputedRef<string>;
    isOpen: import("@vue/composition-api").Ref<boolean>;
    open: () => void;
    toggle: () => void;
    trigger: import("@vue/composition-api").Ref<import("vue/types/umd") | null>;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../..").ComponentObjectPropsOptions<DashmixDropdownProps>, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}> & Pick<import("vue").VueConstructor<import("vue").default>, "filter" | "extend" | "nextTick" | "set" | "delete" | "directive" | "component" | "use" | "mixin" | "compile" | "observable" | "util" | "config" | "version"> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    [x: string]: any;
    [x: number]: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    id: string;
    close: () => void;
    dropdown: import("@vue/composition-api").Ref<HTMLElement | null>;
    dropdownClass: import("@vue/composition-api").ComputedRef<string>;
    dropdownMenuClass: import("@vue/composition-api").ComputedRef<string>;
    isOpen: import("@vue/composition-api").Ref<boolean>;
    open: () => void;
    toggle: () => void;
    trigger: import("@vue/composition-api").Ref<import("vue/types/umd") | null>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}, true>);
