// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { getTemplateBase } from '../../storybook'

import { BootstrapBreadcrumbs } from './Breadcrumbs'
import { BootstrapBreadcrumbsItem, BootstrapBreadcrumbsProps } from './Breadcrumbs.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Bootstrap / Breadcrumbs',
  component: BootstrapBreadcrumbs
}
export default meta



const items: BootstrapBreadcrumbsItem[] = [
  {
    icon: 'home',
    isExternal: true,
    label: 'Lorem',
    target: 'https://google.com'
  },
  {
    label: 'Ipsum',
    target: '/lorem/ipsum/dolor'
  },
  {
    label: 'Dolor',
    target: { name: 'root.home' }
  }
]

const TBasic: Story<BootstrapBreadcrumbsProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapBreadcrumbs },
  template: '<BootstrapBreadcrumbs v-bind="$props" />'
})

export const Basic = TBasic.bind({})
Basic.args = { items }

const TScopedSlots: Story<BootstrapBreadcrumbsProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapBreadcrumbs },
  template: `
    <BootstrapBreadcrumbs v-bind="$props">
      <template v-slot:icon="{ item }">
        <span style="color: gray; border: 1px solid black; padding: 0.5em; margin-right: 1em;">
          <em>Icon</em> for the "{{ item.label }}" item
        </span>
      </template>

      <template v-slot:label="{ item }">
        <span style="color: red;">
          <em>Label</em> for the "{{ item.label }}" item
        </span>
      </template>
    </BootstrapBreadcrumbs>
  `
})

export const ScopedSlots = TScopedSlots.bind({})
ScopedSlots.args = { items }
