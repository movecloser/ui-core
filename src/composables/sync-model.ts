// Copyright © 2021 Move Closer

import { computed, Ref, SetupContext, WritableComputedRef } from '@vue/composition-api'

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
export const useSyncModel = <ValueType>(
  model: Ref<ValueType>,
  ctx: SetupContext,
  propName: string = 'model'
): WritableComputedRef<ValueType> => {
  return computed<ValueType>({
    get (): ValueType {
      return model.value
    },
    set (value: ValueType) {
      ctx.emit(`update:${propName}`, value)
    }
  })
}
