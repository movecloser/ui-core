import { AbstractBreadcrumbsItem, AbstractBreadcrumbsProps } from '../../../../abstract';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface BootstrapBreadcrumbsItem extends AbstractBreadcrumbsItem {
    /**
     * Name of the icon to render next to the item.
     */
    icon?: string;
    /**
     * Determines title for screen readers.
     */
    wcagTitle?: string;
}
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface BootstrapBreadcrumbsProps extends AbstractBreadcrumbsProps {
    /**
     * Array of breadcrumbs to render.
     */
    items: BootstrapBreadcrumbsItem[];
}
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UseBootstrapBreadcrumbsProvides {
    /**
     * Determines whether the passed-in item is the last item in the set.
     *
     * @param item - The item to check.
     */
    isLast: (item: BootstrapBreadcrumbsItem) => boolean;
}
