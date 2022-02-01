"use strict";
// Copyright © 2022 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixAlert = void 0;
const composition_api_1 = require("@vue/composition-api");
const Alert_hooks_1 = require("./Alert.hooks");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixAlert = composition_api_1.defineComponent({
    name: 'DashmixAlert',
    props: Alert_hooks_1.dashmixAlertProps,
    setup: (props, ctx) => {
        return Alert_hooks_1.useDashmixAlert(props, ctx);
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
});
