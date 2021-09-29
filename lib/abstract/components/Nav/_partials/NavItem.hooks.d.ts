import { ComponentObjectPropsOptions } from '../../../../contracts';
import { AbstractNavItemProps } from './NavItem.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const abstractNavItemProps: ComponentObjectPropsOptions<AbstractNavItemProps>;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const useNavItem: (props: AbstractNavItemProps) => {
    innerClassList: import("@vue/composition-api").ComputedRef<string[]>;
    innerId: import("@vue/composition-api").ComputedRef<string>;
};
