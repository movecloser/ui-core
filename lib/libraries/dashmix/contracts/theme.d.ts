import { ValidationClassMap } from '../../../composables';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare enum DashmixSize {
    Large = "lg",
    Normal = "md",
    Small = "sm"
}
/**
 * @author Olga Milczek <stanislaw.gregor@movecloser.pl>
 */
export declare enum DashmixTheme {
    Default = "default",
    Danger = "danger",
    Dark = "dark",
    Info = "info",
    Light = "light",
    Primary = "primary",
    Success = "success",
    Warning = "warning"
}
/**
 * @author Olga Milczek <stanislaw.gregor@movecloser.pl>
 */
export declare const dashmixValidationClassRegistry: ValidationClassMap;
/**
 * @author Olga Milczek <stanislaw.gregor@movecloser.pl>
 */
export interface HasDashmixTheme {
    theme: DashmixTheme;
}
