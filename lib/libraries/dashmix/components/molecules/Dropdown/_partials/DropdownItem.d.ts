import { DropdownItemProps } from '../../../../../../abstract/components/Dropdown';
import { DashmixIconName } from '../../../atoms/Icon';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const DashmixDropdownItem: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    itemClass: import("../../../../../..").UseThemeClassProvides;
    isClickable: import("@vue/composition-api").ComputedRef<boolean>;
    isLoading: import("@vue/composition-api").Ref<boolean>;
    onClick: () => void;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../../..").ComponentObjectPropsOptions<DropdownItemProps>, {} & {
    item?: any;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    item?: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    DashmixIconName: typeof DashmixIconName;
    itemClass: import("../../../../../..").UseThemeClassProvides;
    isClickable: import("@vue/composition-api").ComputedRef<boolean>;
    isLoading: import("@vue/composition-api").Ref<boolean>;
    onClick: () => void;
}>, import("@vue/composition-api").Data, {}, {}, {} & {
    item?: any;
}, {}, true>);
