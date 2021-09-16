// Copyright © 2021 Move Closer

import { computed, PropType } from '@vue/composition-api'

import { canBeDisabledProp } from '../../../composables'
import { ComponentObjectPropsOptions } from '../../../contracts'

import { AbstractLinkProps, Link, UseLinkProvides } from './Link.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const abstractLinkProps: ComponentObjectPropsOptions<AbstractLinkProps> = {
  ...canBeDisabledProp,

  link: {
    type: Object as PropType<Link>,
    required: true
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useLink = (props: AbstractLinkProps): UseLinkProvides => {
  const { label, newTab, target } = props.link

  const aTarget = computed<string>(() => {
    return newTab ? '_blank' : '_self'
  })

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

  const isExternal = computed<boolean>(() => {
    const toCheck: string = typeof target !== 'string' ? `${target.path}` : target

    return props.link.isExternal ||
      toCheck.toLowerCase().startsWith('http://') ||
      toCheck.toLowerCase().startsWith('https://')
  })

  return { aTarget, hasCorrectTarget, isExternal, label, target }
}
