// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { DashmixAccordionType } from '../Accordion.contracts'

import { DashmixAccordionItem } from './AccordionItem'
import { DashmixAccordionItemProps } from './AccordionItem.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Accordion/Accordion Item',
  component: DashmixAccordionItem,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: DashmixAccordionType
      }
    }
  }
}
export default meta

const Template: Story<DashmixAccordionItemProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <DsAccordionItem v-bind="{ label, open, type }">
    {{ content }}
    </DsAccordionItem>
  `
})

export const AccordionItem = Template.bind({})
AccordionItem.args = {
  content: '...and that\' the content!',
  label: 'This is the AccordionItem\'s label',
  open: false,
  type: DashmixAccordionType.Default
}
