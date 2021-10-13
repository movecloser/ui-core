// Copyright © 2021 Move Closer

import { Fragment } from 'vue-fragment'
import { defineComponent } from '@vue/composition-api'

import { linkContentProps } from './LinkContent.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const LinkContent = defineComponent({
  name: 'LinkContent',
  props: linkContentProps,
  components: { Fragment },

  template: `
    <Fragment>
    <slot v-if="$slots.default" />
    <span v-else-if="label && label.length">
        {{ label }}
      </span>
    </Fragment>
  `
})
