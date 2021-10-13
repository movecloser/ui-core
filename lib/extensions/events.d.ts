/**
 * Event that handle enter key press.
 */
export interface IEnterEvent {
    enterPressed(): void;
}
export declare function enterKey(this: IEnterEvent, evt: KeyboardEvent): void;
/**
 * Event that handle escape key press.
 */
export interface IEscapeEvent {
    escapePressed(): void;
}
export declare function escapeKey(this: IEscapeEvent, evt: KeyboardEvent): void;
