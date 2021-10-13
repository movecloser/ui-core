import { Data } from '@vue/composition-api';
import { DashmixTheme } from '../../../contracts';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixBadgeProps extends Data {
    label: string;
    shape: DashmixBadgeShape;
    theme: DashmixTheme;
    variant: DashmixBadgeVariant;
}
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 */
export declare enum DashmixBadgeShape {
    Pill = "pill",
    Rectangle = ""
}
export declare type DashmixBadgeVariant = DashmixBadgeVariantMap.Alt | DashmixBadgeVariantMap.Default;
export declare enum DashmixBadgeVariantMap {
    Alt = "alt",
    Default = "default"
}
