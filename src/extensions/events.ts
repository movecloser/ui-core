// Copyright © 2021 Move Closer

/**
 * Event that handle enter key press.
 */
export interface IEnterEvent {
  enterPressed (): void;
}

export function enterKey (this: IEnterEvent, evt: KeyboardEvent) {
  if (evt.keyCode === 13) {
    this.enterPressed()
  }
}

/**
 * Event that handle escape key press.
 */
export interface IEscapeEvent {
  escapePressed (): void;
}

export function escapeKey (this: IEscapeEvent, evt: KeyboardEvent) {
  if (evt.keyCode === 27) {
    this.escapePressed()
  }
}
