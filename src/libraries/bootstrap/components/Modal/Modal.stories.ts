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
      <UiModal v-bind="{ closable, open }" @close="open = !open">
        <UiModalInner v-bind="{ closable, open }" @close="open = !open">
          <template slot="title">{{ title }}</template>
          <template slot="body">{{ body }}</template>
          <template v-slot:footer="{ close }">
            <div class="d-flex justify-content-around">
              <UiButton class="btn-link text-uppercase" @click="close">Lorem</UiButton>
              <UiButton class="btn-primary text-uppercase" @click="close">Ipsum</UiButton>
            </div>
          </template>
        </UiModalInner>
      </UiModal>

      <UiButton v-if="!open" size="small" @click="open = true">
        Reopen modal
      </UiButton>
    </div>
  `
})
export const Modal = Template.bind({})
Modal.args = defaultArgs
