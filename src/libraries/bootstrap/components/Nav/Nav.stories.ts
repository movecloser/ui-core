// Copyright © 2021 Move Closer

import * as faker from 'faker'
import { Meta, Story } from '@storybook/vue'

import { AbstractNavItem, AbstractNavProps } from '../../../../abstract'

import { BootstrapNav } from './Nav'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'DSL/Bootstrap/Nav/Nav',
  component: BootstrapNav
}
export default meta

const items: AbstractNavItem[] = Array.from(Array(5)).map(() => ({
  disabled: false,
  id: faker.datatype.uuid(),
  label: faker.lorem.word()
}))

const activeItem = items[2].id

const Template: Story<AbstractNavProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data () {
    return {
      activeItem
    }
  },
  template: '<UiNav v-bind="$props" :activeItem.sync="activeItem" />'
})

export const Nav = Template.bind({})
Nav.args = {
  items
}
