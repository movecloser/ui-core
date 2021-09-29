import { SizeMap, SizeRegistry } from '../../../composables';
declare type SizeControlOptions = Partial<Record<SizeMap, string>>;
/**
 * Filters the `SizeMap` enum end returns only those key-value pairs
 * that are defined in the passed-in `SizeRegistry`.
 *
 * @param sizeRegistry - Registry binding the element's size with the applicable CSS class.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const getSizeControlOptions: (sizeRegistry: SizeRegistry) => SizeControlOptions;
export {};
