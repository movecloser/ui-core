// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { DSL_CONFIG_INJECTION_KEY } from '../../../../config'

import { getTemplateBase } from '../../storybook'

import { BootstrapIcon } from './Icon'
import { BootstrapIconProps } from './Icon.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core/Bootstrap/Icon',
  component: BootstrapIcon
}
export default meta

const Template: Story<BootstrapIconProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapIcon },
  inject: { $dsl: DSL_CONFIG_INJECTION_KEY },
  computed: {
    icons () {
      return Object.keys(this.$dsl.icons)
    }
  },
  template: `
    <div>
      <BootstrapIcon v-bind="$props" />
      <hr>
      <p class="m-0">Available icons: <code>{{ icons.join(', ') }}</code></p>
    </div>
  `
})

export const Icon = Template.bind({})
Icon.args = {
  color: '#5F5F5F',
  height: '1em',
  name: '',
  width: '1em'
}
