import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { SwitchesProps } from './Switch.contracts';
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const useSwitchesProps: ComponentObjectPropsOptions<SwitchesProps>;
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const useSwitches: (props: SwitchesProps, ctx: SetupContext) => {
    themeClass: import("@vue/composition-api").ComputedRef<string>;
    sizeClass: import("../../../../../composables").UseSizeClassProvides;
    model: import("@vue/composition-api").WritableComputedRef<boolean>;
};
