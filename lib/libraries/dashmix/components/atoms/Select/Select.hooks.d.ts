import { SetupContext } from '@vue/composition-api';
import { VueSelectInstance } from 'vue-select';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { CalculatedPosition, DashmixSelectItem, DashmixSelectProps } from './Select.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const dashmixSelectProps: ComponentObjectPropsOptions<DashmixSelectProps>;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const useDashmixSelect: (props: DashmixSelectProps, ctx: SetupContext) => {
    _model: import("@vue/composition-api").WritableComputedRef<DashmixSelectItem | DashmixSelectItem[] | undefined>;
    sizeClass: import("../../../../../composables").UseSizeClassProvides;
    withPopper: (dropdownList: HTMLUListElement, component: VueSelectInstance, { width }: CalculatedPosition) => (() => void) | undefined;
};
