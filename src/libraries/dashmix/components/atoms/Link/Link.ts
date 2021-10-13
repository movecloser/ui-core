// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { dashmixLinkProps, useLink } from './Link.hooks'
import { LinkProps } from './Link.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixLink = defineComponent({
  name: 'DashmixLink',
  props: dashmixLinkProps,

  setup (props: LinkProps, ctx: SetupContext) {
    return useLink(props, ctx)
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
})
