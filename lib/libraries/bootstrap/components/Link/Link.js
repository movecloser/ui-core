"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapLink = void 0;
const composition_api_1 = require("@vue/composition-api");
const abstract_1 = require("../../../../abstract");
const Link_hooks_1 = require("./Link.hooks");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.BootstrapLink = composition_api_1.defineComponent({
    name: 'BootstrapLink',
    props: Link_hooks_1.bootstrapLinkProps,
    components: { LinkContent: abstract_1.LinkContent },
    setup(props) {
        const internalInstance = composition_api_1.getCurrentInstance();
        return abstract_1.useLink(props, internalInstance);
    },
    template: `
    <!-- External link OR broken link target -->
    <component v-if="!hasCorrectTarget || isExternal"
               :is="(!hasCorrectTarget || disabled) ? 'span' : 'a'" :title="title"
               :class="{ 'text-muted': (!hasCorrectTarget || disabled) }"
               :rel="(!isDomainFollowed || withNoFollow ) ? 'nofollow' : null"
               v-bind="(!hasCorrectTarget || disabled) ? {} : { href: target.path ?? target, target: aTarget }">
    <LinkContent v-bind="{ label }">
      <slot />
    </LinkContent>
    <span v-if="hasWcagTitle" class="sr-only"> {{ link.wcagTitle }}</span>
    </component>
    <!-- END | External link OR broken link target -->

    <!-- In-app link -->
    <router-link v-else :to="target" :target="aTarget">
    <LinkContent v-bind="{ label }">
      <slot />
    </LinkContent>
    <span v-if="hasWcagTitle" class="sr-only"> {{ link.wcagTitle }} </span>
    </router-link>
    <!-- END | In-app link -->
  `
});
