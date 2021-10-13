import { Data } from '@vue/composition-api';
import { DashmixAccordionLabel, DashmixAccordionType } from '../Accordion.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixAccordionItemProps extends Data {
    /**
     * Determines whether the item should be opened.
     */
    isOpen: boolean;
    /**
     * Item's label.
     */
    label: string | DashmixAccordionLabel;
    /**
     * One of the predefined style presets.
     * @see DashmixAccordionType
     */
    type: DashmixAccordionType;
}
