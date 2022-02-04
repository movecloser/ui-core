import { Data } from '@vue/composition-api';
import { CanBeDisabled } from '../../../../../composables';
import { DashmixNavTabsItemProps } from './_partials';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixNavTabsProps extends CanBeDisabled, Data {
    active: string;
    hasDefaultBackground: boolean;
    items: DashmixNavTabsItemProps[];
    justify: boolean;
    scrollable: boolean;
}
