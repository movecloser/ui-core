import { VueConstructor } from 'vue';
import stripHtml from './strip-html';
import trim from './trim';
import ucFirst from './uc-first';
export { default as stripHtml } from './strip-html';
export { default as trim } from './trim';
export { default as ucFirst } from './uc-first';
export declare const filters: {
    stripHtml: typeof stripHtml;
    trim: typeof trim;
    ucFirst: typeof ucFirst;
};
/**
 * Registers all custom Vue filters.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const registerFilters: (Vue: VueConstructor) => void;
