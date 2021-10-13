// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { DashmixNavTabs } from './NavTabs'
import { DashmixNavTabsProps } from './NavTabs.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Nav Tabs',
  component: DashmixNavTabs
}
export default meta

const Template: Story<DashmixNavTabsProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),

  data () {
    return {
      activeItem: 'lorem'
    }
  },

  template: `
    <div class="block">
    <DsNavTabs :active.sync="activeItem" v-bind="{ items, disabled, hasDefaultBackground }" />

    <div class="block-content block-content-full">
      <p>Active: {{ activeItem }}}</p>
    </div>
    </div>
  `
})

export const NavTabs = Template.bind({})
NavTabs.args = {
  disabled: false,
  hasDefaultBackground: false,
  isScrollable: false,
  items: [
    {
      id: 'lorem',
      label: 'Lorem'
    },
    {
      id: 'ipsum',
      label: 'Ipsum'
    },
    {
      id: 'dolor',
      label: 'Dolor'
    },
    {
      id: 'sit',
      label: 'Sit (disabled)',
      disabled: true
    }
  ]
}
