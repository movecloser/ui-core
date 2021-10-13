"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDashmixFile = exports.dashmixFileProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../../composables");
const Icon_1 = require("../Icon");
const File_config_1 = require("./File.config");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.dashmixFileProps = {
    fallbackIcon: {
        type: String,
        required: false,
        default: () => Icon_1.DashmixIconName.FileAltSolid
    },
    file: {
        type: Object,
        required: true
    },
    draggable: {
        type: Boolean,
        required: false,
        default: true
    }
};
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const useDashmixFile = (props) => {
    const fileLoadError = composition_api_1.ref(false);
    /**
     * Determines whether the thumbnail should be shown.
     */
    const hasThumbnail = composition_api_1.computed(() => {
        return !fileLoadError.value && typeof props.file.thumbnail === 'string' &&
            props.file.thumbnail.length > 0;
    });
    /**
     * Icon that should be used as a placeholder (fallback)
     * in case the file's thumbnail is not available.
     */
    const placeholderIcon = composition_api_1.computed(() => ({
        name: File_config_1.mediaTypeIconNameRegistry[props.file.type] || props.fallbackIcon,
        size: composables_1.SizeMap.Medium
    }));
    return { fileLoadError, hasThumbnail, placeholderIcon };
};
exports.useDashmixFile = useDashmixFile;
