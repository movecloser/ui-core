// Copyright © 2021 Move Closer

import { computed, PropType, SetupContext, toRefs } from '@vue/composition-api'
import { RawLocation } from 'vue-router'

import { canBeDisabledProp } from '../../../../../composables'
import { ComponentObjectPropsOptions } from '../../../../../contracts'

import { LinkProps, UseDashmixLinkProvides } from './Link.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixLinkProps: ComponentObjectPropsOptions<LinkProps> = {
  ...canBeDisabledProp,

  external: {
    type: Boolean,
    required: false,
    default: false
  },

  newTab: {
    type: Boolean,
    required: false,
    default: false
  },

  target: {
    type: [String, Object] as PropType<RawLocation>,
    required: true
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function useLink (props: LinkProps, ctx: SetupContext): UseDashmixLinkProvides {
  const { disabled, external, newTab, target } = toRefs(props)

  const aTarget = computed<string>(() => {
    return newTab.value ? '_blank' : '_self'
  })

  const isExternal = computed<boolean>(() => {
    return typeof target.value === 'string' && external.value
  })

  const onClick = () => {
    if (!disabled.value) {
      ctx.emit('click')
    }
  }

  return { aTarget, isExternal, onClick }
}
