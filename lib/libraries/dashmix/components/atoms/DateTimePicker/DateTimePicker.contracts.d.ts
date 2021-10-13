import { AbstractInputControlProps } from '../../../../../abstract';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export interface DashmixDateTimePickerProps extends AbstractInputControlProps<string> {
    autocomplete: string;
    defaultValue: string;
    disabledDate: DisabledDateCallback;
    format: string;
    pickerType: DateTimePickerType;
    range: boolean;
    showSecond: boolean;
    showWeekNumber: boolean;
    steps: DateTimePickerSteps;
}
/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export declare type DisabledDateCallback = (date: Date, currentValue: Date[]) => boolean;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface DateTimePickerSteps {
    hour?: number;
    minute?: number;
    second?: number;
}
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare enum DateTimePickerType {
    Date = "date",
    DateTime = "datetime",
    Time = "time"
}
