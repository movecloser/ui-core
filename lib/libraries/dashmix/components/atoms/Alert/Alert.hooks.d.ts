import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { DashmixIconName } from '../Icon';
import { DashmixAlertProps } from './Alert.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixAlertProps: ComponentObjectPropsOptions<DashmixAlertProps>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useDashmixAlert: (props: DashmixAlertProps, ctx: SetupContext) => {
    close: () => void;
    closeIcon: DashmixIconName;
    iconToDisplay: import("@vue/composition-api").ComputedRef<DashmixIconName | null>;
    isOpen: import("@vue/composition-api").Ref<boolean>;
};
