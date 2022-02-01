import { DashmixAlertProps } from './Alert.contracts';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const DashmixAlert: import("vue").ComponentOptions<import("vue").default, import("@vue/composition-api").ShallowUnwrapRef<{
    close: () => void;
    closeIcon: import("..").DashmixIconName;
    iconToDisplay: import("@vue/composition-api").ComputedRef<import("..").DashmixIconName | null>;
    isOpen: import("@vue/composition-api").Ref<boolean>;
}> & import("@vue/composition-api").Data, {}, {}, import("../../../../..").ComponentObjectPropsOptions<DashmixAlertProps>, {} & {
    icon?: any;
    theme?: any;
    autoTimeout?: any;
    dismissible?: any;
    showIcon?: any;
    useDefaultIcon?: any;
}> & import("vue").VueConstructor<import("vue").default> & (new (...args: any[]) => import("@vue/composition-api").ComponentRenderProxy<{} & {
    icon?: any;
    theme?: any;
    autoTimeout?: any;
    dismissible?: any;
    showIcon?: any;
    useDefaultIcon?: any;
}, import("@vue/composition-api").ShallowUnwrapRef<{
    close: () => void;
    closeIcon: import("..").DashmixIconName;
    iconToDisplay: import("@vue/composition-api").ComputedRef<import("..").DashmixIconName | null>;
    isOpen: import("@vue/composition-api").Ref<boolean>;
}>, import("@vue/composition-api").Data, {}, {}, {} & {
    icon?: any;
    theme?: any;
    autoTimeout?: any;
    dismissible?: any;
    showIcon?: any;
    useDefaultIcon?: any;
}, {}, true>);
