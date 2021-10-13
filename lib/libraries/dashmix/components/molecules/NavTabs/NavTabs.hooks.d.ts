import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { DashmixNavTabsProps } from './NavTabs.contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const dashmixNavTabsProps: ComponentObjectPropsOptions<DashmixNavTabsProps>;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const useDashmixNavTabs: (props: DashmixNavTabsProps, ctx: SetupContext) => {
    activeTab: import("@vue/composition-api").WritableComputedRef<string>;
    activateTab: (id: string) => void;
    isTabActive: (id: string) => boolean;
};
