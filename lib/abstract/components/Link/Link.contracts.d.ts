import { ComputedRef, Data } from '@vue/composition-api';
import { RawLocation } from 'vue-router';
import { TranslateResult } from 'vue-i18n';
import { CanBeDisabled } from '../../../composables';
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface AbstractLinkProps extends CanBeDisabled, Data {
    /**
     * The link to render.
     */
    link: Link;
}
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface Link {
    /**
     * Determines whether the link's target belongs to the app
     * or to the external resource.
     */
    isExternal?: boolean;
    /**
     * Link's label (text to render).
     */
    label?: string | TranslateResult;
    /**
     * Determines whether the link's target should be opened in a new browser's tab.
     */
    newTab?: boolean;
    /**
     * Link's target.
     *
     * @example internal (in-app) target:
     *   target: {
     *     path: '/profile/details'
     *   }
     *
     *   target: {
     *     name: 'root.home',
     *     params: { id: 123 }
     *   }
     *
     * @example external target:
     *   target: 'https://pudelek.pl'
     */
    target: RawLocation;
}
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface UseLinkProvides {
    /**
     * Value for the `[target]` attribute of the `<a>` element.
     */
    aTarget: ComputedRef<string>;
    /**
     * Determines whether the passed-in `link` prop has a valid `target` property.
     */
    hasCorrectTarget: ComputedRef<boolean>;
    /**
     * @see Link.isExternal
     */
    isExternal: ComputedRef<boolean>;
    /**
     * @see Link.label
     */
    label?: Link['label'];
    /**
     * @see Link.target
     */
    target: Link['target'];
}
