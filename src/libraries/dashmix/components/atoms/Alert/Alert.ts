// Copyright © 2022 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixAlertProps } from './Alert.contracts'
import { dashmixAlertProps, useDashmixAlert } from './Alert.hooks'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixAlert = defineComponent({
  name: 'DashmixAlert',
  props: dashmixAlertProps,

  setup: (props: DashmixAlertProps, ctx: SetupContext) => {
    return useDashmixAlert(props, ctx)
  },

  template: `
    <div v-if="isOpen" class="alert alert-dismissible" role="alert"
         :class="['alert-' + theme, { 'alert-dismissible': dismissible }]">
    <!-- "Close" button -->
    <button v-if="dismissible" type="button" class="close"
            @click="close" data-dismiss="alert" aria-label="Close">
      <DsIcon :icon="closeIcon" size="small" />
    </button>

    <div class="d-flex align-items-center mb-0">
      <!-- Additional icon -->
      <div v-if="showIcon && iconToDisplay" class="flex-00-auto mr-1">
        <DsIcon :icon="iconToDisplay" size="small" />
      </div>

      <!-- Main content -->
      <div class="flex-fill">
        <slot />
      </div>
    </div>
    </div>
  `
})
