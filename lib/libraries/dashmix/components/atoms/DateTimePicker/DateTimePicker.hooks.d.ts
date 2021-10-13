import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { DashmixDateTimePickerProps } from './DateTimePicker.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export declare const dashmixDateTimePickerProps: ComponentObjectPropsOptions<DashmixDateTimePickerProps>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function useDashmixDateTimePicker(props: DashmixDateTimePickerProps, ctx: SetupContext): {
    stepsSetup: import("@vue/composition-api").ComputedRef<{
        hourStep: number;
        minuteStep: number;
        secondStep: number;
    }>;
    value: import("@vue/composition-api").WritableComputedRef<string>;
};
