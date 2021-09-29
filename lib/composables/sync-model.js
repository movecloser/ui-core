"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSyncModel = void 0;
const composition_api_1 = require("@vue/composition-api");
/**
 * Creates the getter and setter for the passed-in Ref
 * which provides the comfortable setup for using the `v-model` directive
 * in conjunction with `:model.sync` binding.
 *
 * @param model - The Ref that we want to bind getter & setter to.
 * @param ctx - Just the regular SetupContext.
 * @param [propName="model"] - The name of the prop. You HAVE TO provide this argument
 *   if the prop's name is different than the standard "model".
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
const useSyncModel = (model, ctx, propName = 'model') => {
    return composition_api_1.computed({
        get() {
            return model.value;
        },
        set(value) {
            ctx.emit(`update:${propName}`, value);
        }
    });
};
exports.useSyncModel = useSyncModel;
