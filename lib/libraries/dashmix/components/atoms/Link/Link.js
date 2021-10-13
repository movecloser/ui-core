"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixLink = void 0;
const composition_api_1 = require("@vue/composition-api");
const Link_hooks_1 = require("./Link.hooks");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixLink = composition_api_1.defineComponent({
    name: 'DashmixLink',
    props: Link_hooks_1.dashmixLinkProps,
    setup(props, ctx) {
        return Link_hooks_1.useLink(props, ctx);
    },
    template: `
    <router-link v-if="!isExternal && !disabled" :to="target" :target="aTarget"
                 @click.native="onClick">
    <slot />
    </router-link>

    <component v-else :is="disabled ? 'span' : 'a'" :class="{ 'text-muted': disabled }"
               v-bind="disabled ? {} : { href: target, target: aTarget }"
               v-on="disabled ? null : { click: onClick }">
    <slot />
    </component>
  `
});
