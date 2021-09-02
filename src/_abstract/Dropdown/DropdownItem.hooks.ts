// Copyright © 2021 Move Closer

import { computed, PropType, ref, SetupContext } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../_contracts'

import { DropdownItem, DropdownItemProps, UseDropdownItemProvides } from './Dropdown.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dropdownItemProps: ComponentObjectPropsOptions<DropdownItemProps> = {
  item: {
    type: Object as PropType<DropdownItem>,
    required: true
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function useDropdownItem (props: DropdownItemProps, ctx: SetupContext): UseDropdownItemProvides {
  const isLoading = ref<boolean>(false)
  const isClickable = computed<boolean>(() => typeof props.item.onClick === 'function')

  const onClick = () => {
    if (isClickable.value) {
      const result = (props.item.onClick as () => unknown)()
      if (result instanceof Promise) {
        isLoading.value = true

        result.then(() => {
          isLoading.value = false
          ctx.emit('click')
        })
      } else {
        ctx.emit('click')
      }
    }
  }

  return { isClickable, isLoading, onClick }
}
