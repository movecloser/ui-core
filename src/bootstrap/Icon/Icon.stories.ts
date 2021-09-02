// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

// import icomoon from '../../../../context/client-app/assets/fonts/icomoon/selection.json'

import { SizeMap } from '../../_composables'
import { getSizeControlOptions } from '../../_helpers'

import { BootstrapIcon } from './Icon'
import { BootstrapIconProps } from './Icon.contracts'
import { bootstrapIconSizeRegistry } from './Icon.config'

// const availableIcons = icomoon.icons.map((icon: { properties: { name: string } }) => icon.properties.name)

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'DSL/Bootstrap/Icon',
  component: BootstrapIcon,

  argTypes: {
    color: { control: 'color' },

    // name: {
    //   control: {
    //     type: 'select',
    //     options: availableIcons
    //   }
    // },

    size: {
      control: {
        type: 'select',
        options: getSizeControlOptions(bootstrapIconSizeRegistry)
      }
    }
  }
}
export default meta

const Template: Story<BootstrapIconProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<D24Icon :name="name" :size="size" :style="{ color }" />'
})
export const Icon = Template.bind({})
Icon.args = {
  color: '#404040',
  // name: availableIcons[0],
  size: SizeMap.Medium
}
