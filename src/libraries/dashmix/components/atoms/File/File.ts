// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { DashmixIcon } from '../Icon'

import { DashmixFileProps } from './File.contracts'
import { dashmixFileProps, useDashmixFile } from './File.hooks'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const DashmixFile = defineComponent({
  name: 'DashmixFile',
  components: { DashmixIcon },
  props: dashmixFileProps,

  setup (props: DashmixFileProps) {
    return useDashmixFile(props)
  },

  template: `
    <div class="file-thumbnail">
    <img v-if="hasThumbnail" :src="file.thumbnail" alt="" class="img-fluid d-block"
         @error="fileLoadError = true" v-bind="{ draggable }">
    <DashmixIcon v-else :icon="placeholderIcon.name" :size="placeholderIcon.size" />
    </div>
  `
})
