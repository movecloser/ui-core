import { ComponentInternalInstance } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../contracts';
import { BootstrapIconProps, UseBootstrapIconProvides } from './Icon.contracts';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const bootstrapIconProps: ComponentObjectPropsOptions<BootstrapIconProps>;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare const useBootstrapIcon: (props: BootstrapIconProps, internalInstance: ComponentInternalInstance | null) => UseBootstrapIconProvides;
