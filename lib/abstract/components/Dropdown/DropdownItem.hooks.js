"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDropdownItem = exports.dropdownItemProps = void 0;
const composition_api_1 = require("@vue/composition-api");
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
exports.dropdownItemProps = {
    item: {
        type: Object,
        required: true
    }
};
/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
function useDropdownItem(props, ctx) {
    const isLoading = composition_api_1.ref(false);
    const isClickable = composition_api_1.computed(() => typeof props.item.onClick === 'function');
    const onClick = () => {
        if (isClickable.value) {
            if (typeof props.item.onClick !== 'function') {
                return;
            }
            const result = props.item.onClick();
            if (result instanceof Promise) {
                isLoading.value = true;
                result.then(() => {
                    isLoading.value = false;
                    ctx.emit('click');
                });
            }
            else {
                ctx.emit('click');
            }
        }
    };
    return { isClickable, isLoading, onClick };
}
exports.useDropdownItem = useDropdownItem;
