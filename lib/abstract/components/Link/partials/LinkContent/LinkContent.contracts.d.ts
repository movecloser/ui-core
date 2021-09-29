import { Data } from '@vue/composition-api';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface LinkContentProps extends Data {
    /**
     * Link's label (text to render).
     */
    label?: string;
}
