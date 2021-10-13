// Copyright © 2021 Move Closer

import { DirectiveBinding } from 'vue/types/options'

/**
 * Focus directive for fields
 */
export default {
  bind (el: HTMLElement, binding: DirectiveBinding) {
    if (binding.value === true) {
      setTimeout(() => el.focus(), 0)
    }
  },

  update (el: HTMLElement, binding: DirectiveBinding) {
    if (binding.value === true) {
      setTimeout(() => el.focus(), 0)
    }
  }
}
