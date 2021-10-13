import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions, FormControlModelType } from '../../../../../contracts';
import { DashmixCheckProps } from './Check.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixCheckProps: ComponentObjectPropsOptions<DashmixCheckProps>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useDashmixCheck: (props: DashmixCheckProps, ctx: SetupContext) => {
    getFieldId: (index: number) => string;
    themeClass: import("@vue/composition-api").ComputedRef<string>;
    sizeClass: import("../../../../../composables").UseSizeClassProvides;
    validationClass: import("../../../../../composables").UseValidMarkerProvides;
    checkType: import("@vue/composition-api").Ref<import("../../../../../abstract").AbstractCheckControlType>;
    checked: import("@vue/composition-api").WritableComputedRef<import("../../../../../abstract").AbstractCheckControlModelType<FormControlModelType>>;
};
