// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const DashmixDropdownDivider = defineComponent({
  name: 'DropdownDivider',
  template: `
    <div role="separator" class="dropdown-divider" />
  `
})
