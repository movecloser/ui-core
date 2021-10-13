import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions, FormControlModelType } from '../../../../../contracts';
import { DashmixCheckListProps } from './CheckList.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixCheckListProps: ComponentObjectPropsOptions<DashmixCheckListProps>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useDashmixCheckList: (props: DashmixCheckListProps, ctx: SetupContext) => {
    getFieldId: (index: number) => string;
    themeClass: import("../../../../../composables").UseThemeClassProvides;
    sizeClass: import("../../../../../composables").UseSizeClassProvides;
    validationClass: import("../../../../../composables").UseValidMarkerProvides;
    checkType: import("@vue/composition-api").Ref<import("../../../../../abstract").AbstractCheckControlType>;
    checked: import("@vue/composition-api").WritableComputedRef<import("../../../../../abstract").AbstractCheckControlModelType<FormControlModelType>>;
};
