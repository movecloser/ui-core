// Copyright © 2021 Move Closer

import { computed, defineComponent, toRef, toRefs } from '@vue/composition-api'

import { useSizeClass } from '../../_composables'

import { BootstrapIconProps } from './Icon.contracts'
import { BOOTSTRAP_FALLBACK_ICON, bootstrapIconSizeRegistry } from './Icon.config'
import { bootstrapIconProps } from './Icon.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const BootstrapIcon = defineComponent({
  name: 'BootstrapIcon',
  props: bootstrapIconProps,

  setup (props: BootstrapIconProps) {
    const { name } = toRefs(props)

    const sizeClass = useSizeClass(toRef(props, 'size'), bootstrapIconSizeRegistry)

    /**
     * The CSS class that actually makes our icon render.
     *
     * @see src/scss/base/fonts/_icomoon.scss
     */
    const iconClass = computed<string>(() => {
      if (typeof name.value !== 'string' || name.value.length === 0) {
        return BOOTSTRAP_FALLBACK_ICON
      }

      return `icon-${name.value}`
    })

    return { iconClass, sizeClass }
  },

  template: '<i :class="[iconClass, sizeClass]" />'
})
