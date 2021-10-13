"use strict";
// Copyright © 2021 Move Closer
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixDSL = void 0;
const composition_api_1 = __importDefault(require("@vue/composition-api"));
const vue_i18n_1 = __importDefault(require("vue-i18n"));
const vue_router_1 = __importDefault(require("vue-router"));
const vue_unique_id_1 = __importDefault(require("vue-unique-id"));
const config_1 = require("../../config");
const helpers_1 = require("../../helpers");
const components_1 = require("./components");
const extensions_1 = require("../../extensions");
/**
 * List of all available DSL components.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const componentsRegistry = {
    Accordion: components_1.DashmixAccordion,
    ActionBadge: components_1.DashmixActionBadge,
    Avatar: components_1.DashmixAvatar,
    Badge: components_1.DashmixBadge,
    Box: components_1.DashmixBox,
    BoxTabs: components_1.DashmixBoxTabs,
    Breadcrumbs: components_1.DashmixBreadcrumbs,
    Button: components_1.DashmixButton,
    Check: components_1.DashmixCheck,
    CheckList: components_1.DashmixCheckList,
    DateTimePicker: components_1.DashmixDateTimePicker,
    Dropdown: components_1.DashmixDropdown,
    DropdownDivider: components_1.DashmixDropdownDivider,
    DropdownItem: components_1.DashmixDropdownItem,
    File: components_1.DashmixFile,
    Filters: components_1.DashmixFilters,
    Icon: components_1.DashmixIcon,
    Input: components_1.DashmixInput,
    InputGroup: components_1.DashmixInputGroup,
    Link: components_1.DashmixLink,
    Modal: components_1.DashmixModal,
    ModalInner: components_1.DashmixModalInner,
    NavTabs: components_1.DashmixNavTabs,
    Pagination: components_1.DashmixPagination,
    Select: components_1.DashmixSelect,
    Switch: components_1.DashmixSwitch,
    Table: components_1.DashmixTable,
    TableCell: components_1.DashmixTableCell,
    TableRow: components_1.DashmixTableRow,
    TableSearchBar: components_1.DashmixTableSearchBar,
    Typeahead: components_1.DashmixTypeahead,
    TextArea: components_1.DashmixTextArea
};
/**
 * Registers the Bootstrap DSL in the app.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.DashmixDSL = {
    install(_Vue, configuration) {
        if (typeof configuration === 'undefined') {
            configuration = {};
        }
        if (typeof configuration.prefix !== 'string' || configuration.prefix.length === 0) {
            configuration.prefix = 'Ds';
        }
        _Vue.mixin({
            provide: { [config_1.DSL_CONFIG_INJECTION_KEY]: configuration }
        });
        // Firstly, register the Composition API.
        // This line HAS TO come first, before any other plugins.
        _Vue.use(composition_api_1.default);
        if (typeof configuration.uidConfig !== 'object' || configuration.uidConfig === null) {
            configuration.uidConfig = config_1.uniqueIdConfig;
        }
        // Next, register additional plugins required for the Bootstrap DSL to work.
        _Vue.use(vue_i18n_1.default);
        _Vue.use(vue_router_1.default);
        _Vue.use(vue_unique_id_1.default, configuration.uidConfig);
        _Vue.use(extensions_1.UICoreExtensions);
        // Finally, register the components.
        for (const [name, component] of Object.entries(componentsRegistry)) {
            helpers_1.registerComponent(component, `${configuration.prefix}${name}`);
        }
    }
};
