import { Data } from '@vue/composition-api';
import { CanBeDisabled, HasErrors, HasSize } from '../composables';
/**
 * Registry that binds the passed-in `T` type with the applicable CSS class.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare type ClassRegistry<T extends string | number | symbol, CSSClass = string> = Record<T, CSSClass>;
/**
 * Base FormControl props.
 */
export interface FormControlBaseProps<ModelType> extends CanBeDisabled, HasErrors, HasSize, Data {
    /**
     * Value for the `[autocomplete]` attribute.
     */
    autocomplete: string;
    /**
     * Determines whether the control should be automatically focused.
     */
    autofocus: boolean;
    /**
     * Text for the `<label>` element.
     */
    label: string;
    /**
     * Control's value, synced via PropSync.
     */
    model: ModelType;
    /**
     * Value for the `[name]` attribute.
     */
    name: string;
    /**
     * Value for the `[placeholder]` attribute.
     */
    placeholder: string | undefined;
    /**
     * Determines whether the element should be mutable.
     */
    readonly: boolean;
    /**
     * Determines whether the control should be marked as required.
     */
    required: boolean;
    /**
     * Determines whether the control should be marked as valid.
     */
    valid: boolean;
}
/**
 * Available UI form controls.
 */
export declare type FormControlType = 'email' | 'checkbox' | 'number' | 'password' | 'radio' | 'text';
/**
 * Available form control's value type.
 */
export declare type FormControlModelType = string | number | boolean;
