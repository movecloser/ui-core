import { ComponentObjectPropsOptions } from '../../contracts';
import { DoubleClick, DoubleClickCallback, UseDoubleClickProvides } from './double-click.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const doubleClickProps: ComponentObjectPropsOptions<DoubleClick>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function useDoubleClick(onDouble: DoubleClickCallback, turnedOn: boolean, clickPeriod?: number): UseDoubleClickProvides;
