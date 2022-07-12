import { DashmixTheme } from '../../../../contracts';
import { DashmixIconName } from '../../../atoms';
import { FilterEditPopupProps } from '../Filters.contracts';
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const FilterEditPopup: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    icons: typeof DashmixIconName;
    colorTheme: typeof DashmixTheme;
    addClearDefinition: () => void;
    conjunction: import("@vue/composition-api").Ref<import("@movecloser/front-core").ConjunctionOperator>;
    conjunctionOptions: import("../../../atoms").DashmixSelectItem[];
    definitions: import("@vue/composition-api").Ref<import("@movecloser/front-core").FilterParams[]>;
    onDefinitionChange: (changed: import("@movecloser/front-core").FilterParams, index: number) => void;
    onDefinitionRemove: (index: number) => void;
    setNewConjunction: (newConjunction: import("@movecloser/front-core").ConjunctionOperator) => void;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../../..").ComponentObjectPropsOptions<FilterEditPopupProps>, {} & {
    value?: any;
    config?: any;
    loading?: any;
    hints?: any;
    dictionaries?: any;
}, {}> & Pick<import("vue").VueConstructor<import("vue").default>, "filter" | "extend" | "nextTick" | "set" | "delete" | "directive" | "component" | "use" | "mixin" | "compile" | "observable" | "util" | "config" | "version"> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    value?: any;
    config?: any;
    loading?: any;
    hints?: any;
    dictionaries?: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    icons: typeof DashmixIconName;
    colorTheme: typeof DashmixTheme;
    addClearDefinition: () => void;
    conjunction: import("@vue/composition-api").Ref<import("@movecloser/front-core").ConjunctionOperator>;
    conjunctionOptions: import("../../../atoms").DashmixSelectItem[];
    definitions: import("@vue/composition-api").Ref<import("@movecloser/front-core").FilterParams[]>;
    onDefinitionChange: (changed: import("@movecloser/front-core").FilterParams, index: number) => void;
    onDefinitionRemove: (index: number) => void;
    setNewConjunction: (newConjunction: import("@movecloser/front-core").ConjunctionOperator) => void;
}>, import("@vue/composition-api").Data, {}, {}, {}, {}, {}, {} & {
    value?: any;
    config?: any;
    loading?: any;
    hints?: any;
    dictionaries?: any;
}, {}, true>);
