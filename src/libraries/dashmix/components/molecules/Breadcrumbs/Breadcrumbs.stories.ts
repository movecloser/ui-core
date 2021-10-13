// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'
import VueRouter from 'vue-router'

import { AbstractBreadcrumbsProps } from '../../../../../abstract'

import { DashmixBreadcrumbs } from './Breadcrumbs'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Breadcrumbs',
  component: DashmixBreadcrumbs
}
export default meta

const Template: Story<AbstractBreadcrumbsProps> = (args, { argTypes }) => ({
  router: new VueRouter(),
  props: Object.keys(argTypes),
  template: `
    <DsBreadcrumbs v-bind="{ items, root, showOnMobile }" />
  `
})

export const Breadcrumbs = Template.bind({})
Breadcrumbs.args = {
  items: [
    {
      label: 'Kategoria 3 - artykuły',
      target: '/kategoria'
    },
    {
      label: 'Tu jest bardzo długi tytył artykułu, bo tak nam zwraca API',
      target: '/kategoria/tytul-artykulu'
    },
    {
      label: 'A tu jakiś kolejny długi tytuł',
      target: '/kategoria/tytul-artykulu/3label'
    }
  ],
  root: {
    label: 'Home',
    target: '/home'
  },
  showOnMobile: false
}
