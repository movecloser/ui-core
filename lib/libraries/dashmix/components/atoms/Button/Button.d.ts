import { DashmixIconName } from '../Icon';
import { DashmixButtonProps } from './Button.contract';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const DashmixButton: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    handleClick: () => void;
    isPendingClick: import("@vue/composition-api").ComputedRef<boolean>;
    message: import("@vue/composition-api").ComputedRef<string>;
    sizeClass: import("../../../../..").UseSizeClassProvides;
    styleClass: import("@vue/composition-api").ComputedRef<string>;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../..").ComponentObjectPropsOptions<DashmixButtonProps>, {} & {
    [x: string]: any;
    [x: number]: any;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    [x: string]: any;
    [x: number]: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    handleClick: () => void;
    isPendingClick: import("@vue/composition-api").ComputedRef<boolean>;
    message: import("@vue/composition-api").ComputedRef<string>;
    sizeClass: import("../../../../..").UseSizeClassProvides;
    styleClass: import("@vue/composition-api").ComputedRef<string>;
}>, import("@vue/composition-api").Data, {}, {}, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}, true>);
