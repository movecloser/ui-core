"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixAccordion = void 0;
const composition_api_1 = require("@vue/composition-api");
const _partials_1 = require("./_partials");
const Accordion_hooks_1 = require("./Accordion.hooks");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.DashmixAccordion = composition_api_1.defineComponent({
    name: 'DashmixAccordion',
    components: { DashmixAccordionItem: _partials_1.DashmixAccordionItem },
    props: Accordion_hooks_1.dashmixAccordionProps,
    emits: ['toggled'],
    setup(props, ctx) {
        return Accordion_hooks_1.useDashmixAccordion(props, ctx);
    },
    template: `
    <div class="accordion">
    <DashmixAccordionItem v-for="(item, index) in items" :key="'accordion-' + item.id"
                          v-bind="{ type }" :isOpen="isItemOpen(index)" :label="item.label"
                          @click="onItemClick(index)">
      <component :is="item.component" v-bind="item?.props" :id="item.id"
                 @changed="payload => onItemChanged(item.id, payload)" />
    </DashmixAccordionItem>
    </div>
  `
});
