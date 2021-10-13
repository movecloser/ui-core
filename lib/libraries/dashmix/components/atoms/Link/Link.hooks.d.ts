import { SetupContext } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../../../contracts';
import { LinkProps, UseDashmixLinkProvides } from './Link.contracts';
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const dashmixLinkProps: ComponentObjectPropsOptions<LinkProps>;
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare function useLink(props: LinkProps, ctx: SetupContext): UseDashmixLinkProvides;
