import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../contracts';
import { AbstractCheckControlProps, AbstractCheckListProps, UseCheckControlProvides } from './CheckControl.contracts';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const getAbstractCheckControlProps: <ModelType>() => ComponentObjectPropsOptions<AbstractCheckControlProps<ModelType>>;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const getAbstractCheckListProps: <ModelType>() => ComponentObjectPropsOptions<AbstractCheckListProps<ModelType>>;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useCheckControl: <ModelType>(props: AbstractCheckControlProps<ModelType> | AbstractCheckListProps<ModelType>, ctx: SetupContext) => UseCheckControlProvides<ModelType>;
