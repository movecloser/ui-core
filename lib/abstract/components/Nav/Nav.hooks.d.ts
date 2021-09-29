import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../contracts';
import { AbstractNavProps } from './Nav.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const abstractNavProps: ComponentObjectPropsOptions<AbstractNavProps>;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useNav: (props: AbstractNavProps, ctx: SetupContext) => {
    _activeItem: import("@vue/composition-api").WritableComputedRef<string>;
    activateItem: (id: string) => void;
    isItemActive: (id: string) => boolean;
};
