import { DashmixTheme } from '../../../../contracts';
import { DashmixBadgeShape, DashmixIconName } from '../../../atoms';
import { SizeMap } from '../../../../../../composables';
import { FilterBadgeProps } from '../Filters.contracts';
import { translateOperatorToLabel } from '../Filters.helpers';
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const FilterBadge: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    badgeTheme: typeof DashmixTheme;
    badgeShape: typeof DashmixBadgeShape;
    icons: typeof DashmixIconName;
    translateOperatorToLabel: typeof translateOperatorToLabel;
    sizes: typeof SizeMap;
    copiedValue: import("@vue/composition-api").Ref<import("@movecloser/front-core").Filter>;
    deleteHint: (hint: import("../..").Hint) => void;
    hints: import("@vue/composition-api").Ref<import("../..").Hint[]>;
    onBadgeClick: (close: () => void, isOpen: boolean) => void;
    resolvedParams: import("@vue/composition-api").Ref<import("@movecloser/front-core").FilterParams[]>;
    setHint: (hint: import("../..").Hint) => void;
    setValue: (newValue: import("@movecloser/front-core").Filter) => void;
    toPrint: (filter: import("@movecloser/front-core").FilterParams) => import("@vue/composition-api").ComputedRef<string>;
    toggleEditMode: (open: () => void, close: () => void, isOpen: boolean) => void;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../../..").ComponentObjectPropsOptions<FilterBadgeProps>, {} & {
    value?: any;
    config?: any;
    loading?: any;
    container?: any;
    dictionaries?: any;
    field?: any;
    isNew?: any;
}, {}> & Pick<import("vue").VueConstructor<import("vue").default>, "filter" | "extend" | "nextTick" | "set" | "delete" | "directive" | "component" | "use" | "mixin" | "compile" | "observable" | "util" | "config" | "version"> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    value?: any;
    config?: any;
    loading?: any;
    container?: any;
    dictionaries?: any;
    field?: any;
    isNew?: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    badgeTheme: typeof DashmixTheme;
    badgeShape: typeof DashmixBadgeShape;
    icons: typeof DashmixIconName;
    translateOperatorToLabel: typeof translateOperatorToLabel;
    sizes: typeof SizeMap;
    copiedValue: import("@vue/composition-api").Ref<import("@movecloser/front-core").Filter>;
    deleteHint: (hint: import("../..").Hint) => void;
    hints: import("@vue/composition-api").Ref<import("../..").Hint[]>;
    onBadgeClick: (close: () => void, isOpen: boolean) => void;
    resolvedParams: import("@vue/composition-api").Ref<import("@movecloser/front-core").FilterParams[]>;
    setHint: (hint: import("../..").Hint) => void;
    setValue: (newValue: import("@movecloser/front-core").Filter) => void;
    toPrint: (filter: import("@movecloser/front-core").FilterParams) => import("@vue/composition-api").ComputedRef<string>;
    toggleEditMode: (open: () => void, close: () => void, isOpen: boolean) => void;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {} & {
    value?: any;
    config?: any;
    loading?: any;
    container?: any;
    dictionaries?: any;
    field?: any;
    isNew?: any;
}, {}, true>);
