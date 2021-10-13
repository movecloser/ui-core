"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixAccordionItem = void 0;
const composition_api_1 = require("@vue/composition-api");
const AccordionItem_hooks_1 = require("./AccordionItem.hooks");
const Icon_1 = require("../../../atoms/Icon");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.DashmixAccordionItem = composition_api_1.defineComponent({
    name: 'DashmixAccordionItem',
    components: { DashmixIcon: Icon_1.DashmixIcon },
    props: AccordionItem_hooks_1.dashmixAccordionItemProps,
    emits: ['click'],
    setup(props, ctx) {
        return { ...AccordionItem_hooks_1.useDashmixAccordionItem(props, ctx), DashmixIconName: Icon_1.DashmixIconName };
    },
    template: `
    <div class="accordion-item" :class="stylePreset.main" @click="onClick">

    <div :class="stylePreset.labelWrapper">
      <span v-if="isSimpleLabel" :class="stylePreset.label">{{ label }}</span>
      <component v-else :class="stylePreset.label" :is="label.component" v-bind="label.props" />
      <DashmixIcon v-if="!isOpen" :icon="DashmixIconName.ChevronDownSolid" class="mr-3" />
      <DashmixIcon v-else :icon="DashmixIconName.ChevronUpSolid" class="mr-3" />
    </div>

    <div class="accordion-item-content" :class="{ 'show': isOpen, 'visible': isVisible }">
      <slot />
    </div>
    </div>
  `
});
