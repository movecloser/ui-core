// Copyright © 2021 Move Closer

import { computed, PropType, ref, SetupContext, toRefs } from '@vue/composition-api'
import { v4 as uuid } from 'uuid'

import { canBeDisabledProp } from '../../../../../composables'
import { ComponentObjectPropsOptions } from '../../../../../contracts'

import { DashmixBoxMode, DashmixBoxModeMap } from '../../atoms/Box'
import { DashmixBoxTabItem, DashmixBoxTabsProps } from './BoxTabs.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixBoxTabsProps: ComponentObjectPropsOptions<DashmixBoxTabsProps> = {
  ...canBeDisabledProp,

  active: {
    type: String,
    required: false,
    default: null
  },

  footerClass: {
    type: String,
    required: false,
    default: ''
  },

  footerMode: {
    type: String as PropType<DashmixBoxMode>,
    required: false,
    default: () => DashmixBoxModeMap.Clean
  },

  items: {
    type: Array as PropType<DashmixBoxTabItem[]>,
    required: true
  },

  justifyTabs: {
    type: Boolean,
    required: false,
    default: false
  },

  noBodyPadding: {
    type: Boolean,
    required: false,
    default: false
  },

  scrollable: {
    type: Boolean,
    required: false,
    default: false
  }
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useDashmixBoxTabs = (props: DashmixBoxTabsProps, ctx: SetupContext) => {
  const { items } = toRefs(props)

  const activeTab = ref<string | number>(items.value.length ? items.value[0].tab.id : '')
  const activeItem = computed<string | number>({
    get: () => {
      return props.active ? props.active : activeTab.value
    },
    set: (value) => {
      ctx.emit('update:active', value)
      activeTab.value = value
    }
  })

  const isFooterDivided = computed<boolean>(() => {
    return props.footerMode === DashmixBoxModeMap.Divided
  })

  const tabId = ref<string>(uuid())
  const tabs = computed(() => {
    return props.items.map((i: DashmixBoxTabItem) => i.tab)
  })

  return { activeItem, isFooterDivided, tabId, tabs }
}
