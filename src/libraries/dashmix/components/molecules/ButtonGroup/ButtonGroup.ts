// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

export const ButtonGroup = defineComponent({
  name: 'ButtonGroup',
  props: {
    direction: {
      type: String,
      required: false,
      defualt: 'horizontal'
    }
  },
  template: `
    <div class="btn-group">
    <slot />
    </div>
  `
})
