// Copyright © 2021 Move Closer

import * as faker from 'faker'
import { Meta, Story } from '@storybook/vue'

import { BootstrapAccordionItem } from './AccordionItem'
import { BootstrapAccordionItemProps } from './AccordionItem.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'DSL/Bootstrap/Accordion/Accordion Item',
  component: BootstrapAccordionItem,
  decorators: [() => ({
    template: '<ul class="list-unstyled"><story /></ul>'
  })]
}
export default meta

const Template: Story<BootstrapAccordionItemProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { BootstrapAccordionItem },
  template: `
    <BootstrapAccordionItem v-bind="$props">
      {{ content }}
    </BootstrapAccordionItem>
  `
})

export const AccordionItem = Template.bind({})
AccordionItem.args = {
  content: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.',
  id: faker.datatype.uuid(),
  isOpen: false,
  label: 'Condimentum Sem Adipiscing'
}
