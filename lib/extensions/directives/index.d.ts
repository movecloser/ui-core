import { VueConstructor } from 'vue';
export { default as closable } from './closable';
export { default as focus } from './focus';
export declare const directives: {
    closable: {
        bind(el: any, binding: any, vnode: import("vue").VNode): void;
        unbind(): void;
    };
    focus: {
        bind(el: HTMLElement, binding: import("vue/types/options").DirectiveBinding): void;
        update(el: HTMLElement, binding: import("vue/types/options").DirectiveBinding): void;
    };
};
/**
 * Registers all custom Vue directives.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const registerDirectives: (Vue: VueConstructor) => void;
