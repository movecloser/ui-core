// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { SizeMap } from '../../../../../composables'

import { DashmixModal } from './Modal'
import { DashmixModalProps } from './Modal.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Modal',
  component: DashmixModal,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: SizeMap
      }
    }
  }
}
export default meta

const Template: Story<DashmixModalProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  data () {
    return {
      isOpen: true
    }
  },

  template: `
    <div>

    <DsModal v-bind="{ isOpen, size }" @close="isOpen = false">
      <template v-slot:default="{ close }">
        <DsModalInner :noControl="noControl" @close="close">
          <h5 class="modal-title" slot="header">Yo!</h5>
          <div class="text-center p-3">
            Example text
            <br /><br />
            <DsButton label="Example button" @click="close" />
          </div>
        </DsModalInner>
      </template>
    </DsModal>

    <DsButton v-if="isOpen === false" label="Show modal" @click="isOpen = true" />

    </div>
  `
})

export const Modal = Template.bind({})
Modal.args = {
  noControl: false
}
