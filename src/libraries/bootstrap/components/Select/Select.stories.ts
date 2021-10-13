// Copyright © 2021 Move Closer

import * as faker from 'faker'
import { Meta, Story } from '@storybook/vue'

import { SizeMap } from '../../../../composables'

import { getTemplateBase } from '../../storybook'

import { BootstrapSelect } from './Select'
import { BootstrapSelectProps } from './Select.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Bootstrap / Forms / Select',
  component: BootstrapSelect
}
export default meta

const Template: Story<BootstrapSelectProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapSelect },
  data () {
    return {
      model: ''
    }
  },
  template: `
    <form>
    <BootstrapSelect :model.sync="model" name="example_name"
                     v-bind="$props" />
    <hr class="mt-5">
    <code class="small">Current value: "{{ model }}"</code>
    </form>`
})

const defaultArgs: Partial<BootstrapSelectProps> = {
  disabled: false,
  errors: [],
  label: faker.lorem.words(),
  options: Array.from(Array(10)).map(() => {
    const label = faker.lorem.words()
    return { label, value: label }
  }),
  placeholder: faker.lorem.words(),
  readonly: false,
  required: false,
  size: SizeMap.Medium
}

export const Basic = Template.bind({})
Basic.args = defaultArgs

export const WithError = Template.bind({})
WithError.args = {
  ...defaultArgs,
  errors: [faker.lorem.sentence()]
}
