import { ComponentInternalInstance } from '@vue/composition-api';
import { ComponentObjectPropsOptions } from '../../../contracts';
import { AbstractLinkProps, UseLinkProvides } from './Link.contracts';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const abstractLinkProps: ComponentObjectPropsOptions<AbstractLinkProps>;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl> (edited)
 * @author Maciej Perzankowski <maciej.perzankowski@movecloser.pl> (edited)
 */
export declare const useLink: (props: AbstractLinkProps, internalInstance: ComponentInternalInstance | null) => UseLinkProvides;
