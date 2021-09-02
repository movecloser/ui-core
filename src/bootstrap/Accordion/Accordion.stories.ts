// Copyright © 2021 Move Closer

import Vue from 'vue'
import { Meta, Story } from '@storybook/vue'

import { BootstrapAccordion } from './Accordion'
import { BootstrapAccordionProps } from './Accordion.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'DSL/Bootstrap/Accordion',
  component: BootstrapAccordion
}
export default meta

const defaultArgs: BootstrapAccordionProps = {
  onlySingleOpen: false,
  items: [
    {
      component: Vue.extend({ template: '<p>Cras mattis consectetur purus sit amet fermentum.</p>' }),
      disabled: false,
      label: 'Etiam porta sem malesuada magna mollis euismod.',
      onToggle () {
        console.log('Nothing happened.')
        return false
      },
      id: '1'
    },
    {
      component: Vue.extend({ template: '<p>Nullam quis risus eget urna mollis ornare vel eu leo.</p>' }),
      label: 'Vestibulum id ligula porta felis euismod semper.',
      onToggle () {
        console.log('Additional action happened.')
        return true
      },
      id: '2'
    },
    {
      component: Vue.extend({ template: '<p>Etiam porta sem malesuada magna mollis euismod.</p>' }),
      label: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.',
      id: '3'
    },
    {
      component: Vue.extend({ template: '<p>Disabled</p>' }),
      disabled: true,
      label: 'Disabled',
      id: '4'
    }
  ],
  tag: 'ul'
}

const Template: Story<BootstrapAccordionProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BootstrapAccordion },
  template: '<BootstrapAccordion v-bind="$props" />'
})

/**
 * Default.
 */
export const Accordion = Template.bind({})
Accordion.args = defaultArgs

/**
 * 1st item open by default.
 */
export const DefaultOpen = Template.bind({})
DefaultOpen.args = {
  ...defaultArgs,
  defaultOpen: 0
}
