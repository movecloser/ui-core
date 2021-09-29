import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions, FormControlBaseProps } from '../../../contracts';
import { SizeRegistry, ValidationClassMap } from '../../../composables';
import { AbstractInputControlProps, UseInputControlProvides } from './InputControl.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const getAbstractBaseControlProps: <ModelType>() => ComponentObjectPropsOptions<FormControlBaseProps<ModelType>>;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const getAbstractInputControlProps: <ModelType>() => ComponentObjectPropsOptions<AbstractInputControlProps<ModelType>>;
/**
 * @param props
 * @param ctx
 * @param sizeRegistry - Registry binding form control's size.
 * @param validClassMap
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useInputControl: <ModelType>(props: AbstractInputControlProps<ModelType>, ctx: SetupContext, sizeRegistry: SizeRegistry, validClassMap?: ValidationClassMap) => UseInputControlProvides<ModelType>;
