// Copyright © 2021 Move Closer

import * as faker from 'faker'
import { Meta, Story } from '@storybook/vue'

import { SrcSet } from '../../../../abstract'

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

const responsiveArgs: Pick<BootstrapImageProps, 'srcset'> = {
  srcset: Array.from(Array(10)).reduce<SrcSet>((acc, curr, index) => {
    const imgWidth: number = (index + 1) * 100
    const imgSrc: string = faker.image.imageUrl(imgWidth)

    return { ...acc, [imgWidth]: imgSrc }
  }, {})
}

export const Normal = Template.bind({})
Normal.args = {
  ...defaultArgs
}

export const NormalResponsive = Template.bind({})
NormalResponsive.args = {
  ...defaultArgs,
  ...responsiveArgs
}

export const Lazy = Template.bind({})
Lazy.args = {
  ...defaultArgs,
  lazy: true
}

export const LazyResponsive = Template.bind({})
LazyResponsive.args = {
  ...defaultArgs,
  ...responsiveArgs,
  lazy: true
}
