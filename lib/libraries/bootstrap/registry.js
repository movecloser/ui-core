"use strict";
// Copyright © 2021 Move Closer
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BootstrapDSL = void 0;
const composition_api_1 = __importDefault(require("@vue/composition-api"));
const vue_i18n_1 = __importDefault(require("vue-i18n"));
const vue_router_1 = __importDefault(require("vue-router"));
const vue_unique_id_1 = __importDefault(require("vue-unique-id"));
const config_1 = require("../../config");
const helpers_1 = require("../../helpers");
const components_1 = require("./components");
/**
 * List of all available DSL components.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const componentsRegistry = {
    Badge: components_1.BootstrapBadge,
    Breadcrumbs: components_1.BootstrapBreadcrumbs,
    Button: components_1.BootstrapButton,
    Check: components_1.BootstrapCheck,
    FormError: components_1.BootstrapFormError,
    Icon: components_1.BootstrapIcon,
    Image: components_1.BootstrapImage,
    Input: components_1.BootstrapInput,
    Link: components_1.BootstrapLink,
    Pagination: components_1.BootstrapPagination,
    Table: components_1.BootstrapTable
};
/**
 * Registers the Bootstrap DSL in the app.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.BootstrapDSL = {
    install(_Vue, configuration) {
        if (typeof configuration === 'undefined') {
            configuration = {};
        }
        if (typeof configuration.prefix !== 'string' || configuration.prefix.length === 0) {
            configuration.prefix = 'Bs';
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
        // Finally, register the components.
        for (const [name, component] of Object.entries(componentsRegistry)) {
            helpers_1.registerComponent(component, `${configuration.prefix}${name}`);
        }
    }
};
