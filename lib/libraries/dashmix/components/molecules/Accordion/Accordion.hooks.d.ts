import { Data, SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { DashmixAccordionProps } from './Accordion.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const dashmixAccordionProps: ComponentObjectPropsOptions<DashmixAccordionProps>;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useDashmixAccordion: (props: DashmixAccordionProps, ctx: SetupContext) => {
    isItemOpen: (itemIndex: number) => boolean;
    onItemClick: (itemIndex: number) => void;
    onItemChanged: (from: string, payload: Data) => void;
};
