import { Data, PropOptions, PropType } from '@vue/composition-api';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 *
 * @see @vue/composition-api/dist/index.d.ts
 */
export declare type ComponentObjectPropsOptions<P = Data> = {
    [K in keyof P]: Prop<P[K]> | null;
};
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 *
 * @see SetupContext.emit
 */
export declare type Emit = (event: string, ...args: unknown[]) => void;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 *
 * @see @vue/composition-api/dist/index.d.ts
 */
export declare type ObjectEmitsOptions = string[] | Record<string, null | ((emitData: unknown) => boolean)>;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare type Prop<T, D = T> = PropOptions<T, D> | PropType<T>;
