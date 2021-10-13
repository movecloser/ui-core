// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import Vue from 'vue'

import { DashmixBoxModeMap } from '../../atoms/Box'
import { DashmixIcon } from '../../atoms/Icon'

import { DashmixBoxTabs } from './BoxTabs'
import { DashmixBoxTabsProps } from './BoxTabs.contracts'

Vue.component('DBoxTabs', DashmixBoxTabs)

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Box Tabs',
  component: DashmixBoxTabs,
  argTypes: {
    footerMode: {
      control: {
        type: 'select',
        options: DashmixBoxModeMap
      }
    }
  }
}
export default meta

const Template: Story<DashmixBoxTabsProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      active: 'one',
      disabled: false,
      scrollable: false,
      items: [
        {
          tab: {
            id: 'one',
            label: 'pierwszy tab'
          },
          component: DashmixIcon,
          props: { icon: 'trash' }
        },
        {
          tab: {
            id: 'twoo',
            label: 'drugi tab'
          },
          component: DashmixIcon,
          props: { icon: 'redo' }
        },
        {
          tab: {
            id: 'threee',
            label: 'trzeci tab'
          },
          component: DashmixIcon,
          props: { icon: 'spinner' }
        },
        {
          tab: {
            id: 'four',
            label: 'czwarty - no component'
          }
        },
        {
          tab: {
            disabled: true,
            id: 'disss',
            label: 'piąty dis tab'
          },
          component: DashmixIcon,
          props: { icon: 'trash' }
        }
      ],
      tabs: [
        {
          tab: {
            id: 'one',
            label: 'pierwszy tab'
          }
        },
        {
          tab: {
            id: 'twoo',
            label: 'drugi tab'
          }
        },
        {
          tab: {
            id: 'threee',
            label: 'trzeci tab'
          }
        },
        {
          tab: {
            id: 'four',
            label: 'czwarty - no component'
          }
        },
        {
          tab: {
            disabled: true,
            id: 'disss',
            label: 'piąty dis tab'
          }
        }
      ]
    }
  },
  methods: {
    manipulate () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.items[0].props.icon = 'redo'
    },
    toggle () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      this.disabled = !this.disabled
    }
  },
  template: `
    <div>
    <DsBoxTabs v-bind="{ footerMode, disabled, items, justifyTabs, noBodyPadding, scrollable }"
               :active.sync="active">
      <DsButton theme="primary" variant="icon" icon="lock" @click="toggle" slot="right" />
      <span v-if="footer.length" slot="footer">{{ footer }}</span>
    </DsBoxTabs>

    <DsBoxTabs
        v-bind="{ footerMode, disabled, items: tabs, justifyTabs, noBodyPadding, scrollable }"
        :active.sync="active">
      <DsButton theme="primary" variant="icon" icon="lock" @click="toggle" slot="right" />

      <template v-slot="context">
        <DsIcon icon="check" v-show="context.item.tab.id === active" />
        <p v-show="context.item.tab.id === active">{{ context.item.tab.id }}</p>
      </template>

      <span v-if="footer.length" slot="footer">{{ footer }}</span>
    </DsBoxTabs>

    <DsButton label="Change" @click="manipulate" />
    </div>
  `
})

export const BoxTabs = Template.bind({})
BoxTabs.args = {
  footer: '',
  justifyTabs: false,
  noBodyPadding: false,
  scrollable: false
}
