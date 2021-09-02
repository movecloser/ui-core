// Copyright © 2021 Move Closer

import * as faker from 'faker'
import { Meta, Story } from '@storybook/vue'

import { BootstrapModal } from './Modal'
import { BootstrapModalProps } from './Modal.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'DSL/Bootstrap/Modal',
  component: BootstrapModal
}
export default meta

const defaultArgs = {
  body: faker.lorem.paragraph(),
  closable: true,
  title: faker.lorem.words()
}

const Template: Story<BootstrapModalProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      open: true
    }
  },
  template: `
    <div>
      <D24Modal v-bind="{ closable, open }" @close="open = !open">
        <D24ModalInner v-bind="{ closable, open }" @close="open = !open">
          <template slot="title">{{ title }}</template>
          <template slot="body">{{ body }}</template>
          <template v-slot:footer="{ close }">
            <div class="d-flex justify-content-around">
              <D24Button class="btn-link text-uppercase" @click="close">Lorem</D24Button>
              <D24Button class="btn-primary text-uppercase" @click="close">Ipsum</D24Button>
            </div>
          </template>
        </D24ModalInner>
      </D24Modal>

      <D24Button v-if="!open" size="small" @click="open = true">
        Reopen modal
      </D24Button>
    </div>
  `
})
export const Modal = Template.bind({})
Modal.args = defaultArgs
