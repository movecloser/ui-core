"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
let handleOutsideClick;
exports.default = {
    bind(el, binding, vnode) {
        // Here's the click/touchstart handler
        // (it is registered below)
        handleOutsideClick = (e) => {
            e.stopPropagation();
            // Get the handler method name and the exclude array
            // from the object used in v-closable
            const { handler, exclude = [] } = binding.value;
            // This variable indicates if the clicked element is excluded
            let clickedOnExcludedEl = false;
            exclude.forEach((refName) => {
                // We only run this code if we haven't detected
                // any excluded element yet
                if (!clickedOnExcludedEl && vnode.context) {
                    // Get the element using the reference name
                    const excludedEl = vnode.context.$refs[refName];
                    // See if this excluded element
                    // is the same element the user just clicked on
                    clickedOnExcludedEl = excludedEl && Array.isArray(excludedEl)
                        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                        // @ts-ignore
                        ? excludedEl.contains(e.target) : false;
                }
            });
            // We check to see if the clicked element is not
            // the dialog element and not excluded
            if (!el.contains(e.target) && !clickedOnExcludedEl) {
                // If the clicked element is outside the dialog
                // and not the button, then call the outside-click handler
                // from the same component this directive is used in
                if (typeof handler === 'function') {
                    handler();
                }
                else if (vnode.context) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
                    vnode.context[handler]();
                }
            }
        };
        // Register click/touchstart event listeners on the whole page
        document.addEventListener('click', handleOutsideClick);
        // document.addEventListener('touchend', handleOutsideClick)
    },
    unbind() {
        // If the element that has v-closable is removed, then
        // unbind click/touchstart listeners from the whole page
        document.removeEventListener('click', handleOutsideClick);
        // document.removeEventListener('touchend', handleOutsideClick)
    }
};
