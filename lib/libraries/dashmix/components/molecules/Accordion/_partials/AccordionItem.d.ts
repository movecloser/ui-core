import { DashmixAccordionItemProps } from './AccordionItem.contracts';
import { DashmixIconName } from '../../../atoms/Icon';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const DashmixAccordionItem: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    isSimpleLabel: import("@vue/composition-api").ComputedRef<boolean>;
    onClick: () => void;
    stylePreset: import("@vue/composition-api").ComputedRef<import("..").DashmixAccordionStylePreset>;
    isVisible: import("@vue/composition-api").Ref<boolean>;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../../..").ComponentObjectPropsOptions<DashmixAccordionItemProps>, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}> & Pick<import("vue").VueConstructor<import("vue").default>, "filter" | "extend" | "nextTick" | "set" | "delete" | "directive" | "component" | "use" | "mixin" | "compile" | "observable" | "util" | "config" | "version"> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    [x: string]: any;
    [x: number]: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    isSimpleLabel: import("@vue/composition-api").ComputedRef<boolean>;
    onClick: () => void;
    stylePreset: import("@vue/composition-api").ComputedRef<import("..").DashmixAccordionStylePreset>;
    isVisible: import("@vue/composition-api").Ref<boolean>;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {} & {
    [x: string]: any;
    [x: number]: any;
}, {}, true>);
