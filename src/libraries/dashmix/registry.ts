// Copyright © 2021 Move Closer

import VueCompositionAPI from '@vue/composition-api'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import VueUniqueId from 'vue-unique-id'
import { PluginObject, VueConstructor } from 'vue'

import { DSL_CONFIG_INJECTION_KEY, uniqueIdConfig } from '../../config'
import { registerComponent } from '../../helpers'

import {
  DashmixActionBadge,
  DashmixAccordion,
  DashmixAvatar,
  DashmixBadge,
  DashmixBox,
  DashmixBoxTabs,
  DashmixBreadcrumbs,
  DashmixButton,
  DashmixCheck,
  DashmixCheckList,
  DashmixDateTimePicker,
  DashmixDropdown,
  DashmixDropdownDivider,
  DashmixDropdownItem,
  DashmixFile,
  DashmixIcon,
  DashmixInput,
  DashmixInputGroup,
  DashmixLink,
  DashmixModal,
  DashmixModalInner,
  DashmixNavTabs,
  DashmixPagination,
  DashmixSelect,
  DashmixSwitch,
  DashmixTable,
  DashmixTypeahead,
  DashmixTableCell,
  DashmixTableRow,
  DashmixTableSearchBar,
  DashmixTextArea,
  DashmixFilters
} from './components'
import { DashmixDSLConfiguration } from './contracts'
import { UICoreExtensions } from '../../extensions'

/**
 * List of all available DSL components.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const componentsRegistry: Record<string, VueConstructor> = {
  Accordion: DashmixAccordion,
  ActionBadge: DashmixActionBadge,
  Avatar: DashmixAvatar,
  Badge: DashmixBadge,
  Box: DashmixBox,
  BoxTabs: DashmixBoxTabs,
  Breadcrumbs: DashmixBreadcrumbs,
  Button: DashmixButton,
  Check: DashmixCheck,
  CheckList: DashmixCheckList,
  DateTimePicker: DashmixDateTimePicker,
  Dropdown: DashmixDropdown,
  DropdownDivider: DashmixDropdownDivider,
  DropdownItem: DashmixDropdownItem,
  File: DashmixFile,
  Filters: DashmixFilters,
  Icon: DashmixIcon,
  Input: DashmixInput,
  InputGroup: DashmixInputGroup,
  Link: DashmixLink,
  Modal: DashmixModal,
  ModalInner: DashmixModalInner,
  NavTabs: DashmixNavTabs,
  Pagination: DashmixPagination,
  Select: DashmixSelect,
  Switch: DashmixSwitch,
  Table: DashmixTable,
  TableCell: DashmixTableCell,
  TableRow: DashmixTableRow,
  TableSearchBar: DashmixTableSearchBar,
  Typeahead: DashmixTypeahead,
  TextArea: DashmixTextArea
}

/**
 * Registers the Bootstrap DSL in the app.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const DashmixDSL: PluginObject<DashmixDSLConfiguration> = {
  install (_Vue, configuration?: DashmixDSLConfiguration) {
    if (typeof configuration === 'undefined') {
      configuration = {}
    }

    if (typeof configuration.prefix !== 'string' || configuration.prefix.length === 0) {
      configuration.prefix = 'Ds'
    }

    _Vue.mixin({
      provide: { [DSL_CONFIG_INJECTION_KEY]: configuration }
    })

    // Firstly, register the Composition API.
    // This line HAS TO come first, before any other plugins.
    _Vue.use(VueCompositionAPI)

    if (typeof configuration.uidConfig !== 'object' || configuration.uidConfig === null) {
      configuration.uidConfig = uniqueIdConfig
    }

    // Next, register additional plugins required for the Bootstrap DSL to work.
    _Vue.use(VueI18n)
    _Vue.use(VueRouter)
    _Vue.use(VueUniqueId, configuration.uidConfig)

    _Vue.use(UICoreExtensions)

    // Finally, register the components.
    for (const [name, component] of Object.entries(componentsRegistry)) {
      registerComponent(component, `${configuration.prefix}${name}`)
    }
  }
}
