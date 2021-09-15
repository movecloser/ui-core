// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { getTemplateBase } from '../../storybook'

import { BootstrapBreadcrumbs } from './Breadcrumbs'
import { BootstrapBreadcrumbsProps } from './Breadcrumbs.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Bootstrap / Breadcrumbs',
  component: BootstrapBreadcrumbs
}
export default meta

const Template: Story<BootstrapBreadcrumbsProps> = (args, { argTypes }) => ({
  ...getTemplateBase(argTypes),
  components: { BootstrapBreadcrumbs },
  template: '<BootstrapBreadcrumbs v-bind="$props" />'
})

export const Breadcrumbs = Template.bind({})
Breadcrumbs.args = {
  items: [
    {
      icon: 'home',
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
}
