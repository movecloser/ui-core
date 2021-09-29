import { Data } from '@vue/composition-api';
import { AbstractNavItem } from './_partials';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface AbstractNavProps extends Data {
    /**
     * The ID of the currently-active item.
     */
    activeItem: string;
    /**
     * Items to render.
     */
    items: AbstractNavItem[];
}
