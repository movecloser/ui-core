import { Ref, SetupContext, WritableComputedRef } from '@vue/composition-api';
/**
 * Creates the getter and setter for the passed-in Ref
 * which provides the comfortable setup for using the `v-model` directive
 * in conjunction with `:model.sync` binding.
 *
 * @param model - The Ref that we want to bind getter & setter to.
 * @param ctx - Just the regular SetupContext.
 * @param [propName="model"] - The name of the prop. You HAVE TO provide this argument
 *   if the prop's name is different than the standard "model".
 * @param [castAsNumber=false] - Determines whether the User's input should be automatically
 *   typecast as a `Number` (see: https://vuejs.org/v2/guide/forms.html#number).
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export declare const useSyncModel: <ModelType>(model: Ref<ModelType>, ctx: SetupContext, propName?: string, castAsNumber?: boolean) => WritableComputedRef<ModelType>;
