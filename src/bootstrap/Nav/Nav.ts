// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { AbstractNavProps, abstractNavProps, useNav } from '../../_abstract'

import { BootstrapNavItem } from './_partials'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const BootstrapNav = defineComponent({
  name: 'BootstrapNav',
  components: { BootstrapNavItem },
  props: abstractNavProps,
  emits: ['update:activeItem'],

  setup (props: AbstractNavProps, ctx: SetupContext) {
    const { _activeItem, activateItem, isItemActive } = useNav(props, ctx)
    return { _activeItem, activateItem, isItemActive }
  },

  template: `
    <nav>
      <div class="nav nav-tabs" role="tablist" :class="{'--right' : items.length > 6 }">
        <div class="nav-tabs__inner">
          <BootstrapNavItem v-for="item in items" :key="item.id" v-bind="item"
                            :active="isItemActive(item.id)" @click="activateItem(item.id)" />
        </div>
      </div>
    </nav>
  `
})
