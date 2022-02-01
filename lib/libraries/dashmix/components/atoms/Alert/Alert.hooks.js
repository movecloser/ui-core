"use strict";
// Copyright © 2022 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixAlert = exports.dashmixAlertProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const Icon_1 = require("../Icon");
const Alert_contracts_1 = require("./Alert.contracts");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dashmixAlertProps = {
    autoTimeout: {
        type: Number,
        required: false,
        default: null
    },
    dismissible: {
        type: Boolean,
        required: false,
        default: false
    },
    icon: {
        type: String,
        required: false,
        default: null
    },
    showIcon: {
        type: Boolean,
        required: false,
        default: true
    },
    theme: {
        type: String,
        required: false,
        default: Alert_contracts_1.DashmixAlertTheme.Info
    },
    useDefaultIcon: {
        type: Boolean,
        required: false,
        default: true
    }
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useDashmixAlert = (props, ctx) => {
    const isOpen = composition_api_1.ref(true);
    const closeAlert = () => {
        isOpen.value = false;
        ctx.emit('close');
    };
    const iconToDisplay = composition_api_1.computed(() => {
        if (!props.icon && props.useDefaultIcon) {
            switch (props.theme) {
                case Alert_contracts_1.DashmixAlertTheme.Danger:
                    return Icon_1.DashmixIconName.ExclamationSolid;
                case Alert_contracts_1.DashmixAlertTheme.Info:
                    return Icon_1.DashmixIconName.InfoSolid;
                case Alert_contracts_1.DashmixAlertTheme.Primary:
                    return Icon_1.DashmixIconName.InfoSolid;
                case Alert_contracts_1.DashmixAlertTheme.Success:
                    return Icon_1.DashmixIconName.CheckSolid;
                case Alert_contracts_1.DashmixAlertTheme.Warning:
                    return Icon_1.DashmixIconName.ExclamationTriangleSolid;
            }
        }
        return props.icon;
    });
    if (props.autoTimeout) {
        setTimeout(() => closeAlert(), props.autoTimeout);
    }
    return { close: closeAlert, closeIcon: Icon_1.DashmixIconName.TimesSolid, iconToDisplay, isOpen };
};
exports.useDashmixAlert = useDashmixAlert;
