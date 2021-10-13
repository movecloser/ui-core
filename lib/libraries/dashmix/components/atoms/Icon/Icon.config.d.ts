import { SizeMap } from '../../../../../composables';
import { DashmixIconName } from './Icon.contracts';
/**
 * Registry that binds the `IconName` with the applicable set of CSS classes.
 *
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 *
 * @see DashmixIconName
 */
export declare const dashmixIconClassRegistry: Record<DashmixIconName, string>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixIconSizeRegistry: Record<SizeMap, string>;
