// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { SizeMap } from '../../../../../composables'

import { DashmixTheme } from '../../../contracts'

import { DashmixBadgeShape, DashmixButton, DashmixIconName, DashmixInput } from '../../atoms'

import { DashmixActionBadge } from '../ActionBadge'
import { DashmixDropdown } from '../Dropdown'
import { DashmixInputGroup } from '../InputGroup'

import { InputTypeahead } from './partials/InputTypeahead'
import { typeaheadProps, useTypeahead } from './Typeahead.hook'
import { TypeaheadProps } from './Typeahead.contracts'

/**
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 */
export const DashmixTypeahead = defineComponent({
  name: 'DashmixTypeahead',
  components: {
    InputTypeahead,
    DashmixActionBadge,
    DashmixDropdown,
    DashmixInputGroup,
    DashmixInput,
    DashmixButton
  },
  props: typeaheadProps,
  emits: ['cleared', 'selected', 'searched', 'deleted'],
  setup (props: TypeaheadProps, ctx: SetupContext) {
    return {
      ...useTypeahead(props, ctx),
      badgeShapes: DashmixBadgeShape,
      colorTheme: DashmixTheme,
      icon: DashmixIconName,
      sizes: SizeMap
    }
  },

  template: `
    <div class="typeahead">
    <!-- Typeahead input -->
    <DashmixDropdown :items="dropdownItems">
      <template v-slot:trigger="{open, close}">
        <template v-if="!isMulti && showSelection && selected.length > 0">
          <DashmixInputGroup :size="size">
            <DashmixInput :model="selected[0].label" :name="name" class="text-gray-darker"
                          disabled />
            <template v-slot:append>
              <DashmixButton variant="icon" :icon="icon.TimesSolid" :theme="colorTheme.Dark"
                             :size="sizes.Small"
                             :disabled="disabled"
                             @click="() => $emit('deleted', selected[0])" v-slot:appendText />
            </template>
          </DashmixInputGroup>
        </template>

        <template v-else>
          <InputTypeahead
              ref="input"
              v-bind="{ clearable, name, placeholder: $t(placeholder), isMulti, size, loading, disabled, autofocus }"
              :model.sync="value"
              v-closable="{ handler: close, exclude: [] }"
              @onClear="onClear" @onInput="onInputChange" @focus="open" />
        </template>
      </template>
    </DashmixDropdown>


    <!-- Selected elements -->
    <div v-if="showSelection && isMulti" class="d-flex flex-wrap">
      <DashmixActionBadge
          v-for="(selectedItem, index) in selected"
          :theme="badgeTheme"
          :variant="badgeVariant"
          :key="index + selectedItem.label + name"
          :shape="badgeShapes.Rectangle"
          class="mr-2 mt-2"
          :icon="icon.TimesSolid"
          @clicked="() => $emit('deleted', selectedItem)"
          :disabled="disabled"
      >
        <slot :selected="selectedItem">
          {{ selectedItem.label | trim(badgeMaxLength) }}
        </slot>
      </DashmixActionBadge>
    </div>
    </div>
  `
})
