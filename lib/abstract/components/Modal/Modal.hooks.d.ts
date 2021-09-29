import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../contracts';
import { AbstractModalProps, UseModalProvides } from './Modal.contracts';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const abstractModalProps: ComponentObjectPropsOptions<AbstractModalProps>;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const useModal: (props: AbstractModalProps, ctx: SetupContext) => UseModalProvides;
