// Copyright © 2021 Move Closer

import { computed, PropType } from '@vue/composition-api'

import { canBeDisabledProp } from '../../_composables'
import { ComponentObjectPropsOptions } from '../../_contracts'

import { AbstractLinkProps, Link, UseLinkProvides } from './Link.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const abstractLinkProps: ComponentObjectPropsOptions<AbstractLinkProps> = {
  ...canBeDisabledProp,

  /**
   * The link to render.
   */
  link: {
    type: Object as PropType<Link>,
    required: true
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useLink = (props: AbstractLinkProps): UseLinkProvides => {
  const { isExternal, label, newTab, target } = props.link

  /**
   * Value for the `[target]` attribute of the `<a>` element.
   */
  const aTarget = computed<string>(() => {
    return newTab ? '_blank' : '_self'
  })

  /**
   * Determines whether the passed-in `link` prop has a valid `target` property.
   */
  const hasCorrectTarget = computed<boolean>(() => {
    if (typeof target === 'undefined') {
      return false
    }

    if (typeof target === 'object' && target === null) {
      return false
    }

    // noinspection RedundantIfStatementJS
    if (typeof target === 'string' && target.length === 0) {
      return false
    }

    return true
  })

  const external = computed<boolean>(() => {
    const toCheck: string = typeof target !== 'string' ? `${target.path}` : target

    return isExternal || toCheck.toLowerCase().startsWith('http://') || toCheck.toLowerCase().startsWith('https://')
  })

  return { aTarget, hasCorrectTarget, external, label, target }
}
