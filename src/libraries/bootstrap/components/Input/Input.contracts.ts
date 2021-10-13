// Copyright © 2021 Move Closer

import { AbstractInputControlProps } from '../../../../abstract'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export enum BootstrapInputType {
  Text = 'text',
  Email = 'email',
  Number = 'number',
  Password = 'password',
  Search = 'search'
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface BootstrapInputProps extends AbstractInputControlProps<BootstrapInputModelType> {
  /**
   * The name of the icon that is to be prepended to the `<input>`.
   */
  icon: string;

  /**
   * Content for the `<label>` element.
   */
  label: string;

  /**
   * Value for the `[type]` attribute.
   */
  type: BootstrapInputType;
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type BootstrapInputModelType = string | number
