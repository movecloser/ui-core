import { Data } from '@vue/composition-api';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixPaginationProps extends Data {
    /**
     * Number of the currently-active page.
     */
    currentPage: number;
    /**
     * Total number (sum) of the items in the given collection.
     */
    itemsTotal: number;
    /**
     * Number of items per each page.
     */
    perPage: number;
}
