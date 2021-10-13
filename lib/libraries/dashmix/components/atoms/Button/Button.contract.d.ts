import { Data } from '@vue/composition-api';
import { CanBeDisabled, DoubleClick, HasSize } from '../../../../../composables';
import { DashmixTheme } from '../../../contracts';
import { DashmixIconName } from '../Icon';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DashmixButtonProps extends CanBeDisabled, DoubleClick, HasSize, Data {
    /**
     * Show label on small screen
     */
    alwaysWithLabel: boolean;
    /**
     * Text shown to the User when he clicks the button for the 1st time.
     * In use only when the `doubleClick` prop is set to `true`.
     * @see DashmixButtonProps.doubleClick
     */
    confirmationText: string;
    /**
     * Button's icon.
     */
    icon: DashmixIconName | null;
    /**
     * Button's label.
     */
    label: string;
    /**
     * Determines whether the component should display a loading indicator.
     */
    loading: boolean;
    /**
     * Button's theme (colour variant).
     */
    theme: DashmixTheme;
    /**
     * Button's variant (style variant).
     */
    variant: DashmixButtonVariant;
}
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare type DashmixButtonVariant = 'alt' | 'default' | 'hero' | 'icon' | 'outline' | 'none';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare enum DashmixButtonVariantMap {
    Alt = "alt",
    Default = "default",
    Hero = "hero",
    Icon = "icon",
    Outline = "outline",
    None = "none"
}
