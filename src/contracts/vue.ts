// Copyright © 2021 Move Closer

import { Data, PropOptions, PropType } from '@vue/composition-api'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 *
 * @see @vue/composition-api/dist/index.d.ts
 */
export type ComponentObjectPropsOptions<P = Data> = {
  [K in keyof P]: Prop<P[K]> | null;
};

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 *
 * @see SetupContext.emit
 */
export type Emit = (event: string, ...args: unknown[]) => void

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 *
 * @see @vue/composition-api/dist/index.d.ts
 */
export type ObjectEmitsOptions = string[] | Record<string, null | ((emitData: unknown) => boolean)>;

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type Prop<T, D = T> = PropOptions<T, D> | PropType<T>;
