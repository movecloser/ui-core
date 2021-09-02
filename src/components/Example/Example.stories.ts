// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { Example as _Example } from './Example'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'UI Core / Example'
}
export default meta

const Template: Story = (args, { argTypes }) => ({
  components: { Example: _Example },
  props: Object.keys(argTypes),
  template: '<Example />'
})

export const Example = Template.bind({})
