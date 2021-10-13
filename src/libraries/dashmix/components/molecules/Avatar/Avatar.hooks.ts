// Copyright © 2021 Move Closer

import { computed, PropType, ref, toRef } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import { Size, SizeMap, useSizeClass } from '../../../../../composables'

import { AvatarProps } from './Avatar.contracts'
import { getAbbreviation, getHSLAColorFromString } from './Avatar.helpers'
import { avatarSizeRegistry } from './Avatar.config'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const avatarProps: ComponentObjectPropsOptions<AvatarProps> = {
  person: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: false,
    default: null
  },
  size: {
    type: String as PropType<Size>,
    required: false,
    default: SizeMap.Small
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useAvatar = (props: AvatarProps) => {
  const caption = computed(() => {
    return props.source ? props.person : getAbbreviation(props.person)
  })

  const color = computed(() => {
    return props.source ? '' : getHSLAColorFromString(props.person)
  })

  const sizeClass = useSizeClass(toRef(props, 'size'), avatarSizeRegistry)

  return {
    caption,
    color,
    sizeClass
  }
}
