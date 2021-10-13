// Copyright © 2021 Move Closer

import { defineComponent, SetupContext } from '@vue/composition-api'

import { DashmixBox } from '../../atoms/Box'
import { DashmixButton } from '../../atoms/Button'
import { DashmixIcon, DashmixIconName } from '../../atoms/Icon'
import { DashmixInput } from '../../atoms/Input'
import { DashmixModal } from '../Modal'
import { DashmixSelect } from '../../atoms/Select'

import { DashmixTableSearchBarProps } from './TableSearchBar.contracts'
import { dashmixTableSearchBarProps, useDashmixTableSearchBar } from './TableSearchBar.hooks'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 * @author Olga Milczek <olga.milczek@movecloser.pl>
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const DashmixTableSearchBar = defineComponent({
  name: 'DashmixTableSearchBar',
  components: { DashmixBox, DashmixButton, DashmixIcon, DashmixInput, DashmixModal, DashmixSelect },
  props: dashmixTableSearchBarProps,

  setup (props: DashmixTableSearchBarProps, ctx: SetupContext) {
    return { ...useDashmixTableSearchBar(props, ctx), DashmixIconName }
  },
  emits: ['bulk'],

  template: `
    <div class="table-filter-bar row px-2">

    <div class="col-12 col-md-4 col-lg-3">
      <DashmixInput type="search" :model.sync="searchModel" :placeholder="searchPlaceholder"
                    name="tableSearchInput">
        <template v-slot:prependText>
          <DashmixIcon :icon="DashmixIconName.SearchSolid" />
        </template>
      </DashmixInput>
    </div>

    <div class="col-12 col-md-4 col-lg-6 pl-0 mt-3 mt-md-0">
      <slot />
    </div>

    <div class="col-12 col-md-4 col-lg-3 mt-3 mt-md-0 d-none d-md-block">
      <DashmixSelect v-if="selected.length > 0" :model="null" :options="bulkActions"
                     :placeholder="'Zmień zaznaczone (' + selected.length + ')'" :searchable="false"
                     @option:selected="action => $emit('bulk', action.action, selected)"
                     :loading="isProcessing" />
    </div>
    </div>
  `
})
