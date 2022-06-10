// Copyright © 2021 Move Closer

import { ComponentInternalInstance, computed, inject, PropType } from '@vue/composition-api'

import { canBeDisabledProp } from '../../../composables'
import { ComponentObjectPropsOptions } from '../../../contracts'

import { AbstractLinkProps, INJECT_FOLLOWED_DOMAINS_KEY, Link, UseLinkProvides } from './Link.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const abstractLinkProps: ComponentObjectPropsOptions<AbstractLinkProps> = {
  ...canBeDisabledProp,

  link: {
    type: Object as PropType<Link>,
    required: true
  },

  noFollow: {
    type: Boolean,
    required: false,
    default: false
  }
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl> (edited)
 * @author Maciej Perzankowski <maciej.perzankowski@movecloser.pl> (edited)
 */
export const useLink = (
  props: AbstractLinkProps,
  internalInstance: ComponentInternalInstance | null
): UseLinkProvides => {
  if (internalInstance === null) {
    throw new Error(
      'useLink(): FATAL ERROR! Failed to resolve the component instance!')
  }

  const followedDomains = inject<string[]>(INJECT_FOLLOWED_DOMAINS_KEY, [])
  const { label, newTab, target, title } = props.link
  const { proxy } = internalInstance

  const _title = computed<string>(() => {
    if (typeof props.link.newTab === 'undefined' || !props.link.newTab) {
      return title ?? ''
    }

    if (typeof title === 'undefined' || !title.length) {
      return String(proxy.$t('_.link-title'))
    }

    return `${proxy.$t('_.link-title')}: ${title}`
  })

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

  const hasWcagTitle = computed<boolean>(() => {
    if (typeof props.link.wcagTitle === 'undefined') {
      return false
    }

    return props.link.wcagTitle.length > 0
  })

  const isExternal = computed<boolean>(() => {
    const toCheck: string = typeof target !== 'string' ? `${target.path}` : target

    return props.link.isExternal ||
      toCheck.toLowerCase().startsWith('http://') ||
      toCheck.toLowerCase().startsWith('https://')
  })

  const isDomainFollowed = computed(() => {
    const toCheck: string = typeof target !== 'string' ? `${target.path}` : target

    if (followedDomains.length === 0) {
      return true
    }

    for (const domain of followedDomains) {
      if (toCheck.match(domain)) {
        return true
      }
    }

    return false
  })

  const withNoFollow = computed<boolean>(() => {
    if (typeof props.noFollow === 'undefined') {
      return false
    }

    return props.noFollow
  })

  return {
    aTarget,
    hasCorrectTarget,
    hasWcagTitle,
    isDomainFollowed,
    isExternal,
    label,
    target,
    title: _title,
    withNoFollow
  }
}
