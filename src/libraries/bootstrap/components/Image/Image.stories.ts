// Copyright © 2021 Move Closer

import * as faker from 'faker'
import { Meta, Story } from '@storybook/vue'

import { getTemplateBase } from '../../storybook'

import { BootstrapImage } from './Image'
import { BootstrapImageProps } from './Image.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Bootstrap / Image',
  component: BootstrapImage
}
export default meta

const Template: Story<BootstrapImageProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapImage },
  template: '<BootstrapImage v-bind="$props" />'
})

const defaultArgs: BootstrapImageProps = {
  alt: faker.lorem.sentence(),
  lazy: false,
  src: faker.image.image()
}

export const Normal = Template.bind({})
Normal.args = {
  ...defaultArgs
}

export const Lazy = Template.bind({})
Lazy.args = {
  ...defaultArgs,
  lazy: true
}
