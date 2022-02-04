import { Data } from '@vue/composition-api';
import { VueConstructor } from 'vue';
import { CanBeDisabled } from '../../../../../../composables';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixNavTabsItemProps extends CanBeDisabled, Data {
    /**
     * Determines whether the tab is the currently active one.
     */
    active: boolean;
    /**
     * Index of tab.
     */
    index: number;
    /**
     * Tab id.
     */
    id: string | number;
    /**
     * Tab's label.
     */
    label: string | VueConstructor;
    /**
     * Properties of label component.
     */
    props: Data;
}
