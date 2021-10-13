import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { DashmixBoxProps } from './Box.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixBoxProps: ComponentObjectPropsOptions<DashmixBoxProps>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function useDashmixBox(props: DashmixBoxProps, ctx: SetupContext): {
    bodyPaddingClass: import("@vue/composition-api").ComputedRef<string>;
    isFooterDivided: import("@vue/composition-api").ComputedRef<boolean>;
    isHeaderDivided: import("@vue/composition-api").ComputedRef<boolean>;
};
