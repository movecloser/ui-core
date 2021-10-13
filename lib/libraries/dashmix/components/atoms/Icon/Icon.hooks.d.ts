import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { DashmixIconProps } from './Icon.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixIconProps: ComponentObjectPropsOptions<DashmixIconProps>;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useDashmixIcon: (props: DashmixIconProps) => {
    iconClass: import("@vue/composition-api").ComputedRef<string>;
    sizeClass: import("../../../../../composables").UseSizeClassProvides;
};
