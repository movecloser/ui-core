import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../../contracts';
import { DashmixAccordionStylePreset } from '../Accordion.contracts';
import { DashmixAccordionItemProps } from './AccordionItem.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const dashmixAccordionItemProps: ComponentObjectPropsOptions<DashmixAccordionItemProps>;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const useDashmixAccordionItem: (props: DashmixAccordionItemProps, ctx: SetupContext) => {
    isSimpleLabel: import("@vue/composition-api").ComputedRef<boolean>;
    onClick: () => void;
    stylePreset: import("@vue/composition-api").ComputedRef<DashmixAccordionStylePreset>;
    isVisible: import("@vue/composition-api").Ref<boolean>;
};
