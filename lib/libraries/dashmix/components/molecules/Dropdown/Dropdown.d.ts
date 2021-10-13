import { DashmixDropdownProps } from './Dropdown.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const DashmixDropdown: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    id: string;
    close: () => void;
    dropdownClass: import("@vue/composition-api").ComputedRef<string>;
    dropdownMenuClass: import("@vue/composition-api").ComputedRef<string>;
    isOpen: import("@vue/composition-api").ComputedRef<boolean>;
    open: () => void;
    toggle: () => void;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../..").ComponentObjectPropsOptions<DashmixDropdownProps>, {} & {
    [x: string]: any;
    [x: number]: any;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    [x: string]: any;
    [x: number]: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    id: string;
    close: () => void;
    dropdownClass: import("@vue/composition-api").ComputedRef<string>;
    dropdownMenuClass: import("@vue/composition-api").ComputedRef<string>;
    isOpen: import("@vue/composition-api").ComputedRef<boolean>;
    open: () => void;
    toggle: () => void;
}>, import("@vue/composition-api").Data, {}, {}, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}, true>);
