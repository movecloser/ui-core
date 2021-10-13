"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAvatar = exports.avatarProps = void 0;
const composition_api_1 = require("@vue/composition-api");
const composables_1 = require("../../../../../composables");
const Avatar_helpers_1 = require("./Avatar.helpers");
const Avatar_config_1 = require("./Avatar.config");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.avatarProps = {
    person: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: false,
        default: null
    },
    size: {
        type: String,
        required: false,
        default: composables_1.SizeMap.Small
    }
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useAvatar = (props) => {
    const caption = composition_api_1.computed(() => {
        return props.source ? props.person : Avatar_helpers_1.getAbbreviation(props.person);
    });
    const color = composition_api_1.computed(() => {
        return props.source ? '' : Avatar_helpers_1.getHSLAColorFromString(props.person);
    });
    const sizeClass = composables_1.useSizeClass(composition_api_1.toRef(props, 'size'), Avatar_config_1.avatarSizeRegistry);
    return {
        caption,
        color,
        sizeClass
    };
};
exports.useAvatar = useAvatar;
