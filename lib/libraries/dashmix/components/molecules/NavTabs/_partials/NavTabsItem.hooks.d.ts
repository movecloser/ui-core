import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../../contracts';
import { DashmixNavTabsItemProps } from './NavTabsItem.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixNavTabsItemProps: ComponentObjectPropsOptions<DashmixNavTabsItemProps>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useDashmixNavTabsItem: (props: DashmixNavTabsItemProps, ctx: SetupContext) => {
    isSimpleTab: boolean;
    onClick: () => void;
};
