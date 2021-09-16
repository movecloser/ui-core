// Copyright © 2021 Move Closer

import * as faker from 'faker'
import { Meta, Story } from '@storybook/vue'

import { getTemplateBase } from '../../storybook'

import { BootstrapCheck } from './Check'
import { BootstrapCheckProps } from './Check.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Bootstrap / Forms / Check',
  component: BootstrapCheck,
  argTypes: {
    multiple: { table: { disable: true } }
  }
}
export default meta

const Template: Story<BootstrapCheckProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapCheck },
  data () {
    return {
      model: args.multiple ? [] : null
    }
  },
  template: `
    <div>
      <BootstrapCheck v-bind="$props" :model.sync="model" name="check" />
      <hr class="mt-5">
      <code class="small">Current value: "{{ model }}"</code>
    </div>
  `
})

const defaultArgs: Partial<BootstrapCheckProps> = {
  label: faker.lorem.sentence(),
  options: Array.from(Array(5)).map((_, index) => {
    const label = faker.lorem.word()
    const value = `${index}-${label}`
    return { label, value }
  }),
  stacked: false
}

export const Single = Template.bind({})
Single.args = {
  ...defaultArgs,
  multiple: false
}

export const SingleWithError = Template.bind({})
SingleWithError.args = {
  ...defaultArgs,
  multiple: false,
  errors: [faker.lorem.sentence()]
}

export const Multiple = Template.bind({})
Multiple.args = {
  ...defaultArgs,
  multiple: true
}

export const MultipleWithError = Template.bind({})
MultipleWithError.args = {
  ...defaultArgs,
  multiple: true,
  errors: [faker.lorem.sentence()]
}
