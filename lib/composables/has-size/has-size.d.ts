import { PropOptions, Ref } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../contracts';
import { HasSize, Size, SizeMap, SizeRegistry, UseSizeClassProvides } from './has-size.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const getSizePropDefinition: (defaultSize?: SizeMap) => PropOptions;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const hasSizeProp: ComponentObjectPropsOptions<HasSize>;
/**
 * @param size - Component's `size` reactive reference.
 * @param sizeClassRegistry - registry that should be used
 *  to determine the applicable CSS class.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useSizeClass: (size: Ref<Size>, sizeClassRegistry: SizeRegistry) => UseSizeClassProvides;
