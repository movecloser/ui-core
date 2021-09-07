// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import './FormError.scss'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const BootstrapFormError = defineComponent({
  name: 'BootstrapFormError',
  template: `
    <p class="form-error">
      <slot />
    </p>
  `
})
