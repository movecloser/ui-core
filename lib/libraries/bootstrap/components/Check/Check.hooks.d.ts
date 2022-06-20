import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../contracts';
import { ValidationClassMap } from '../../../../composables';
import { BootstrapCheckProps, UseBootstrapCheckProvides } from './Check.contracts';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 * @author Maciej Perzankowski <maciej.perzankowski@movecloser.pl>
 */
export declare const bootstrapCheckProps: ComponentObjectPropsOptions<BootstrapCheckProps>;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useBootstrapCheck: (props: BootstrapCheckProps, ctx: SetupContext, validClassMap?: ValidationClassMap) => UseBootstrapCheckProvides;
