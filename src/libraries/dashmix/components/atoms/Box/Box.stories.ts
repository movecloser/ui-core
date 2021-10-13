// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { DashmixBoxModeMap, DashmixBoxProps } from './Box.contracts'
import { DashmixBox } from './Box'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Box',
  component: DashmixBox,
  argTypes: {
    footerMode: {
      control: {
        type: 'select',
        options: DashmixBoxModeMap
      }
    },
    headerMode: {
      control: {
        type: 'select',
        options: DashmixBoxModeMap
      }
    }
  }
}
export default meta

const Template: Story<DashmixBoxProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <DsBox v-bind="{ footerMode, headerMode, shadow, noBodyPadding }">
    <span v-if="header.length" slot="header">{{ header }}</span>
    {{ content }}
    <span v-if="footer.length" slot="footer">{{ footer }}</span>
    </DsBox>
  `
})

export const Box = Template.bind({})
Box.args = {
  content: 'Maecenas faucibus mollis interdum.',
  header: '',
  footer: '',
  noBodyPadding: false,
  shadow: false
}
