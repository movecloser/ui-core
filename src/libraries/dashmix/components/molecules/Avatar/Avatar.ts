// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { avatarProps, useAvatar } from './Avatar.hooks'
import { AvatarProps } from './Avatar.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixAvatar = defineComponent({
  name: 'DashmixAvatar',
  props: avatarProps,
  setup: (props: AvatarProps) => {
    return useAvatar(props)
  },
  template: `
    <figure class="avatar" :class="sizeClass" :alt="person" :title="person">
    <img class="img-avatar alt-hidden" :class="sizeClass" :src="source" :alt="person"
         v-if="source" />
    <figcaption class="img-avatar" :class="sizeClass" :style="{backgroundColor: color}" v-else>
      {{ caption }}
    </figcaption>
    </figure>
  `
})
