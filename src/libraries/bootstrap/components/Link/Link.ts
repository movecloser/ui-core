// Copyright © 2021 Move Closer

import { defineComponent, getCurrentInstance } from '@vue/composition-api'

import { LinkContent, useLink } from '../../../../abstract'

import { BootstrapLinkProps } from './Link.contracts'
import { bootstrapLinkProps } from './Link.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const BootstrapLink = defineComponent({
  name: 'BootstrapLink',
  props: bootstrapLinkProps,
  components: { LinkContent },

  setup (props: BootstrapLinkProps) {
    const internalInstance = getCurrentInstance()

    return useLink(props, internalInstance)
  },

  template: `
    <!-- External link OR broken link target -->
    <component v-if="!hasCorrectTarget || isExternal"
               :is="(!hasCorrectTarget || disabled) ? 'span' : 'a'" :title="title"
               :class="{ 'text-muted': (!hasCorrectTarget || disabled) }"
               :rel="(!isDomainFollowed || withNoFollow ) ? 'nofollow' : null"
               v-bind="(!hasCorrectTarget || disabled) ? {} : { href: target.path ?? target, target: aTarget }">
    <span v-if="hasWcagTitle" class="sr-only"> {{ link.wcagTitle }} </span>
    <LinkContent v-bind="{ label }">
      <slot />
    </LinkContent>
    </component>
    <!-- END | External link OR broken link target -->

    <!-- In-app link -->
    <router-link v-else :to="target" :target="aTarget">
    <span v-if="hasWcagTitle" class="sr-only"> {{ link.wcagTitle }} </span>
    <LinkContent v-bind="{ label }">
      <slot />
    </LinkContent>
    </router-link>
    <!-- END | In-app link -->
  `
})
