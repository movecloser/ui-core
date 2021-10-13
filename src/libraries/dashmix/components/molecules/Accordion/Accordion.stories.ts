// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { DashmixAccordionProps, DashmixAccordionType } from './Accordion.contracts'
import { DashmixAccordion } from './Accordion'
import { DashmixIcon, DashmixIconName } from '../../atoms/Icon'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Accordion',
  component: DashmixAccordion,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: Object.values(DashmixAccordionType)
      }
    }
  }
}
export default meta

const defaultArgs = {
  onlySingleOpen: false,
  items: [
    {
      component: DashmixIcon,
      label: 'Tagi',
      id: 'item_tags',
      props: { icon: DashmixIconName.PenSolid }
    },
    {
      component: DashmixIcon,
      label: 'Etykiety',
      id: 'item_labels',
      props: { icon: DashmixIconName.Edit }
    },
    {
      component: DashmixIcon,
      label: {
        component: DashmixIcon,
        props: { icon: DashmixIconName.Edit }
      },
      id: 'item_example',
      props: { icon: DashmixIconName.SearchSolid }
    }
  ],
  type: DashmixAccordionType.Default
}

/**
 * Default.
 */
const TAccordion: Story<DashmixAccordionProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<DsAccordion v-bind="{ items, onlySingleOpen }" />'
})
export const Accordion = TAccordion.bind({})
Accordion.args = defaultArgs

/**
 * 1st item open by default.
 */
const TDefaultOpen: Story<DashmixAccordionProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<DsAccordion v-bind="{ items, onlySingleOpen, defaultOpen }" />'
})
export const DefaultOpen = TDefaultOpen.bind({})
DefaultOpen.args = {
  ...defaultArgs,
  defaultOpen: 0
}
