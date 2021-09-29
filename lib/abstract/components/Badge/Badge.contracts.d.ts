import { Data } from '@vue/composition-api';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface AbstractBadgeProps extends Data {
    /**
     * The HTML tag that should be used.
     */
    tag: string;
}
