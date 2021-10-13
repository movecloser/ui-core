// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { SizeMap } from '../../../../../composables'

import { DashmixAvatar } from './Avatar'
import { AvatarProps } from './Avatar.contracts'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Avatar',
  component: DashmixAvatar,
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: SizeMap
      }
    }
  }
}
export default meta

const defaultArgs = {
  person: 'Jan Kowalski',
  size: SizeMap.Large
}

/**
 * Default.
 */
const avatar: Story<AvatarProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <DsAvatar v-bind="$props" />
  `
})
export const Avatar = avatar.bind({})
Avatar.args = defaultArgs
