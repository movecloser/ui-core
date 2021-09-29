import { ComputedRef, Data } from '@vue/composition-api';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface AbstractPaginationProps extends Data {
    /**
     * Currently-active page.
     */
    currentPage: number;
    /**
     * Determines whether the direction buttons (left/right) should be shown.
     */
    showDirectionButtons: boolean;
    /**
     * Total sum of all available pages.
     */
    totalPages: number;
    /**
     * Determines the maximum number of items (pagination buttons)
     * that can be rendered at once.
     */
    totalVisible?: number;
}
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UsePaginationProvides {
    /**
     * Determines whether the User can navigate to the previous page.
     */
    canGoBack: ComputedRef<boolean>;
    /**
     * Determines whether the User can navigate to the next page.
     */
    canGoNext: ComputedRef<boolean>;
    /**
     * Pagination items to render.
     */
    items: ComputedRef<Array<string | number>>;
    /**
     * Handles the `@click` event on the "go to page" button.
     *
     * @param page - Number of the clicked page.
     */
    onDirectPageClick: (page: number) => void;
    /**
     * Handles the `@click` event on the "next page" button.
     */
    onNextPageClick: () => void;
    /**
     * Handles the `@click` event on the "previous page" button.
     */
    onPrevPageClick: () => void;
}
