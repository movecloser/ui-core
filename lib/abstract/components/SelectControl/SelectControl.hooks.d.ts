import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../contracts';
import { SizeRegistry, ValidationClassMap } from '../../../composables';
import { AbstractSelectControlProps, UseSelectControlProvides } from './SelectControl.contracts';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const getAbstractSelectControlProps: <ModelType>() => ComponentObjectPropsOptions<AbstractSelectControlProps<ModelType>>;
/**
 * @param props
 * @param ctx
 * @param sizeRegistry - Registry binding form control's size.
 * @param validClassMap
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useSelectControl: <ModelType>(props: AbstractSelectControlProps<ModelType>, ctx: SetupContext, sizeRegistry: SizeRegistry, validClassMap?: ValidationClassMap) => UseSelectControlProvides<ModelType>;
