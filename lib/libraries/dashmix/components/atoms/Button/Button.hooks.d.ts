import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { DashmixButtonProps } from './Button.contract';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixButtonProps: ComponentObjectPropsOptions<DashmixButtonProps>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function useDashmixButton(props: DashmixButtonProps, ctx: SetupContext): {
    handleClick: () => void;
    isPendingClick: import("@vue/composition-api").ComputedRef<boolean>;
    message: import("@vue/composition-api").ComputedRef<string>;
    sizeClass: import("../../../../../composables").UseSizeClassProvides;
    styleClass: import("@vue/composition-api").ComputedRef<string>;
};
