"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixBoxTabs = exports.dashmixBoxTabsProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const uuid_1 = require("uuid");
const composables_1 = require("../../../../../composables");
const Box_1 = require("../../atoms/Box");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixBoxTabsProps = {
    ...composables_1.canBeDisabledProp,
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
        type: String,
        required: false,
        default: () => Box_1.DashmixBoxModeMap.Clean
    },
    items: {
        type: Array,
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
};
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useDashmixBoxTabs = (props, ctx) => {
    const { items } = composition_api_1.toRefs(props);
    const activeTab = composition_api_1.ref(items.value.length ? items.value[0].tab.id : '');
    const activeItem = composition_api_1.computed({
        get: () => {
            return props.active ? props.active : activeTab.value;
        },
        set: (value) => {
            ctx.emit('update:active', value);
            activeTab.value = value;
        }
    });
    const isFooterDivided = composition_api_1.computed(() => {
        return props.footerMode === Box_1.DashmixBoxModeMap.Divided;
    });
    const tabId = composition_api_1.ref(uuid_1.v4());
    const tabs = composition_api_1.computed(() => {
        return props.items.map((i) => i.tab);
    });
    return { activeItem, isFooterDivided, tabId, tabs };
};
exports.useDashmixBoxTabs = useDashmixBoxTabs;
