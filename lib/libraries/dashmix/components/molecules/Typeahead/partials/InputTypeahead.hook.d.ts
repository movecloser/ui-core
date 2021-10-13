import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions, FormControlModelType } from '../../../../../../contracts';
import { InputTypeaheadProps } from './InputTypeahead.contracts';
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const inputTypeaheadProps: ComponentObjectPropsOptions<InputTypeaheadProps>;
/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export declare const useInputTypeahead: (props: InputTypeaheadProps, ctx: SetupContext) => {
    value: import("@vue/composition-api").WritableComputedRef<FormControlModelType>;
};
