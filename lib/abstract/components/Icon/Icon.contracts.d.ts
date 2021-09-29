import { Data } from '@vue/composition-api';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface AbstractIconProps extends Data {
    /**
     * The name (identifier) of the icon we want to render.
     */
    name: string;
}
