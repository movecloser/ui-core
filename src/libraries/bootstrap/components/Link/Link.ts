// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

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
    return useLink(props)
  },

  template: `
    <!-- External link OR broken link target -->
    <component v-if="!hasCorrectTarget || isExternal" :is="(!hasCorrectTarget || disabled) ? 'span' : 'a'"
               :class="{ 'text-muted': (!hasCorrectTarget || disabled) }"
               v-bind="(!hasCorrectTarget || disabled) ? {} : { href: target.path ?? target, target: aTarget }">
      <LinkContent v-bind="{ label }">
        <slot />
      </LinkContent>
    </component>
    <!-- END | External link OR broken link target -->

    <!-- In-app link -->
    <router-link v-else :to="target" :target="aTarget">
      <LinkContent v-bind="{ label }">
        <slot />
      </LinkContent>
    </router-link>
    <!-- END | In-app link -->
  `
})
