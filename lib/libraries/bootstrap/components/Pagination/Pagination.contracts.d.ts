/**
 * This interface covers only one, specific prop, which is `currentPage`,
 * but the component itself handles all the props defined for the `<BPagination>` component.
 * Please, refer to the Bootstrap Vue's documentation for the complete list of the supported props.
 *
 * @see https://bootstrap-vue.org/docs/components/pagination#comp-ref-b-pagination-props
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface BootstrapPaginationProps {
    /**
     * Currently-active page.
     */
    model: number;
}
