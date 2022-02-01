import { DashmixIconName } from '../Icon';
export interface DashmixAlertProps {
    autoTimeout: number | null;
    dismissible: boolean;
    icon: DashmixIconName | null;
    showIcon: boolean;
    theme: DashmixAlertTheme;
    useDefaultIcon: boolean;
}
export declare enum DashmixAlertTheme {
    Danger = "danger",
    Info = "info",
    Primary = "primary",
    Success = "success",
    Warning = "warning"
}
