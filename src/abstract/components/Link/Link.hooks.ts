// Copyright © 2021 Move Closer

import { ComponentInternalInstance, computed, PropType } from '@vue/composition-api'

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
 * @author Javlon Khalimjonov <javlon.khalimjonov@movecloser.pl> (edited)
 */
export const useLink = (
  props: AbstractLinkProps,
  internalInstance: ComponentInternalInstance | null
): UseLinkProvides => {
  const { label, newTab, target, title } = props.link

  if (internalInstance === null) {
    throw new Error(
      'useLink(): FATAL ERROR! Failed to resolve the component instance!')
  }

  const { proxy } = internalInstance

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

  const _title = computed<string>(() => {
    if (typeof props.link.newTab === 'undefined' || !props.link.newTab) {
      return title ?? ''
    }

    if (typeof title === 'undefined' || !title.length) {
      return String(proxy.$t('_.link-title'))
    }

    return `${proxy.$t('_.link-title')}: ${title}`
  })

  return { aTarget, hasCorrectTarget, isExternal, label, target, title: _title }
}
