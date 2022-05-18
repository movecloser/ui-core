"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useBootstrapIcon = exports.bootstrapIconProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const helpers_1 = require("../../../../helpers");
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.bootstrapIconProps = {
    color: {
        type: String,
        required: false,
        default: 'currentColor'
    },
    height: {
        type: [Number, String],
        required: false,
        default: '1em'
    },
    name: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: false
    },
    width: {
        type: [Number, String],
        required: false,
        default: '1em'
    }
};
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const useBootstrapIcon = (props, internalInstance) => {
    const dslConfig = helpers_1.getDSLConfig();
    /**
     * @see UseBootstrapIconProvides.component
     */
    const component = composition_api_1.computed(() => {
        if (typeof dslConfig === 'undefined' || typeof dslConfig.icons === 'undefined') {
            return undefined;
        }
        return dslConfig.icons[props.name];
    });
    /**
     * @see UseBootstrapIconProvides._title
     */
    const _title = composition_api_1.computed(() => {
        /**
         * Determines whether the component has been provided with the correct `title` prop.
         */
        const hasTitle = typeof props.title === 'string' && props.title.length > 0;
        if (internalInstance === null) {
            console.error('useBootstrapIcon(): FATAL ERROR! Failed to resolve the component instance!');
            if (!hasTitle) {
                return '';
            }
            console.error('Using the value of the [title] prop as-is.');
            return props.title;
        }
        if (!hasTitle) {
            console.warn('useBootstrapIcon(): The value for the title prop has not been provided. Falling back to the generic translation.');
            return internalInstance.proxy.$t('_.icon');
        }
        /**
         * Determines whether the VueI18n plugin has found an applicable translation
         * for the `dsl.icons.[props.title]` translation key.
         */
        const hasTranslation = internalInstance.proxy.$te(`dsl.icons.${props.title}`);
        if (!hasTranslation) {
            console.warn(`useBootstrapIcon(): Translation for [dsl.icons.${props.title}] does not exist. Using the value of the [title] prop as-is.`);
            return props.title;
        }
        return internalInstance.proxy.$t(`dsl.icons.${props.title}`);
    });
    return { _title, component };
};
exports.useBootstrapIcon = useBootstrapIcon;
