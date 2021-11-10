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
 * @param [castAsNumber=false] - Determines whether the User's input should be automatically
 *   typecast as a `Number` (see: https://vuejs.org/v2/guide/forms.html#number).
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const useSyncModel = <ModelType> (
  model: Ref<ModelType>,
  ctx: SetupContext,
  propName: string = 'model',
  castAsNumber: boolean = false
): WritableComputedRef<ModelType> => {
  return computed<ModelType>({
    get (): ModelType {
      return model.value
    },
    set (value: ModelType) {
      let _value

      if (castAsNumber) {
        try {
          _value = parseFloat(value as unknown as string)
        } catch (error) {
          console.error(`useSyncModel.set(): Failed to cast the [value] as [Number]! Received: [${value}]`, error)
          _value = value
        }
      } else {
        _value = value
      }

      ctx.emit(`update:${propName}`, _value)
    }
  })
}
