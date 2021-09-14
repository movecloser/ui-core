// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

export const BootstrapTableCell = defineComponent({
  name: 'BootstrapTableCell',

  template: `
        <span v-if="!shouldRenderComponent(data)">{{ findCell(data).value }}</span>
        <component v-else :is="findCell(data).component" :item="findCell(data).value" />
  `
})
