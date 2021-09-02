// Copyright © 2021 Move Closer

import * as faker from 'faker'
import { Meta, Story } from '@storybook/vue'

import { AbstractNavItemProps, AbstractNavItemTag } from '../../../_abstract'

import { BootstrapNavItem } from './NavItem'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'DSL/Bootstrap/Nav/Nav Item',
  component: BootstrapNavItem,
  argTypes: {
    tag: {
      control: {
        type: 'select',
        options: AbstractNavItemTag
      }
    }
  },
  decorators: [() => ({
    template: `
      <nav>
        <div class="nav nav-tabs">
          <story />
        </div>
      </nav>
    `
  })]
}
export default meta

const Template: Story<AbstractNavItemProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: '<D24NavItem v-bind="$props" />'
})

export const NavItem = Template.bind({})
NavItem.args = {
  active: false,
  disabled: false,
  id: faker.datatype.uuid(),
  label: faker.lorem.word(),
  tag: AbstractNavItemTag.Button
}
