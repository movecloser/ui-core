// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapIcon = defineComponent({
  name: 'BootstrapIcon',
  props: {
    viewBox: { type: String, default: '0 0 24 24' },
    name: { type: String, default: 'icon' },
    width: { type: [Number, String], default: '1em' },
    height: { type: [Number, String], default: '1em' },
    color: { type: String, default: 'currentColor' }
  },

  template: `
     <svg xmlns="http://www.w3.org/2000/svg" role="img"
          v-bind="{ width, height, viewBox }">
       <g :fill="color">
         <slot v-if="$slots.default" />
         <component v-else-if="$dsl.icons && $dsl.icons[name] && typeof $dsl.icons[name] === 'function'"
                    :is="$dsl.icons[name]" />
       </g>
    </svg>
  `
})
