import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { DashmixBadgeProps } from './Badge.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixBadgeProps: ComponentObjectPropsOptions<DashmixBadgeProps>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useDashmixBadge: (props: DashmixBadgeProps) => {
    shapeClass: import("@vue/composition-api").ComputedRef<string>;
    styleClass: import("@vue/composition-api").ComputedRef<string>;
};
