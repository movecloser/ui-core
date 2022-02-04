import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { DashmixBoxTabsProps } from './BoxTabs.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixBoxTabsProps: ComponentObjectPropsOptions<DashmixBoxTabsProps>;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useDashmixBoxTabs: (props: DashmixBoxTabsProps, ctx: SetupContext) => {
    activeItem: import("@vue/composition-api").WritableComputedRef<string | number>;
    isFooterDivided: import("@vue/composition-api").ComputedRef<boolean>;
    tabId: import("@vue/composition-api").Ref<string>;
    tabs: import("@vue/composition-api").ComputedRef<import("..").DashmixNavTabsItemProps[]>;
};
