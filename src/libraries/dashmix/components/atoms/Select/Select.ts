// Copyright © 2021 Move Closer

import VSelect from 'vue-select'
import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixIcon, DashmixIconName } from '../Icon'

import { DashmixSelectProps } from './Select.contracts'
import { dashmixSelectProps, useDashmixSelect } from './Select.hooks'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const DashmixSelect = defineComponent({
  name: 'DashmixSelect',
  components: { DashmixIcon, VSelect },
  props: dashmixSelectProps,

  setup (props: DashmixSelectProps, ctx: SetupContext) {
    return { ...useDashmixSelect(props, ctx), DashmixIconName }
  },

  template: `
    <VSelect v-model="_model" v-bind="$props" :appendToBody="withDynamicPosition" v-on="$listeners"
             :class="sizeClass" :calculatePosition="withPopper">
    <template #spinner="{ loading }">
      <DashmixIcon v-if="loading" :icon="DashmixIconName.SpinnerSolid" />
    </template>

    <template #open-indicator="{ attributes }">
        <span v-bind="attributes">
          <DashmixIcon :icon="DashmixIconName.ChevronDownSolid" />
        </span>
    </template>

    <template #selected-option="{label, icon}">
      <template v-if="isSimpleLabel">
        <DashmixIcon v-if="icon" v-bind="{ icon }" class="mr-2" />
        {{ label }}
      </template>

      <template v-else>
        <component :is="label.constructor" v-bind="label.props" />
      </template>
    </template>

    <template #option="{ icon, label }">
      <template v-if="isSimpleLabel">
        <DashmixIcon v-if="icon" v-bind="{ icon }" class="mr-2" />
        {{ label }}
      </template>

      <template v-else>
        <component :is="label.constructor" v-bind="label.props" />
      </template>
    </template>

    <template #no-options>
      <slot name="no-options">
        <span slot="no-options">Brak wyników.</span>
      </slot>
    </template>
    </VSelect>
  `
})
