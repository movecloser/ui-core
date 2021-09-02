// Copyright © 2021 Move Closer

import UniqueId from 'vue-unique-id'
import Vue, { VueConstructor } from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'

import { registerComponent } from '../../abstract'

import { BootstrapAccordion, BootstrapAccordionItem } from './components/Accordion'
import { BootstrapBadge } from './components/Badge'
import { BootstrapButton } from './components/Button'
import { BootstrapCheck } from './components/Check'
import { BootstrapFormError } from './components/FormError'
import { BootstrapIcon } from './components/Icon'
import { BootstrapImage } from './components/Image'
import { BootstrapInput } from './components/Input'
import { BootstrapLink } from './components/Link'
import { BootstrapModal, BootstrapModalInner } from './components/Modal'
import { BootstrapNav, BootstrapNavItem } from './components/Nav'
import { BootstrapPagination } from './components/Pagination'
import { BootstrapTextArea } from './components/TextArea'

/**
 * List of all available DSL components.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const componentsRegistry: Record<string, VueConstructor> = {
  Accordion: BootstrapAccordion,
  AccordionItem: BootstrapAccordionItem,
  Badge: BootstrapBadge,
  Button: BootstrapButton,
  Check: BootstrapCheck,
  FormError: BootstrapFormError,
  Icon: BootstrapIcon,
  Image: BootstrapImage,
  Input: BootstrapInput,
  Link: BootstrapLink,
  Modal: BootstrapModal,
  ModalInner: BootstrapModalInner,
  Nav: BootstrapNav,
  NavItem: BootstrapNavItem,
  Pagination: BootstrapPagination,
  Text: BootstrapTextArea
}

/**
 * Registers the Bootstrap DSL in the app.
 *
 * @param [prefix="Bs"] - The string that should be used to prefix each component's name.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const registerBootstrapDSL = (prefix: string = 'Bs'): void => {
  // Firstly, register the Composition API.
  // This line HAS TO come first, before any other plugins.
  Vue.use(VueCompositionAPI)

  // Next, register additional plugins required for the Bootstrap DSL to work.
  Vue.use(UniqueId)
  Vue.use(VueI18n)
  Vue.use(VueRouter)

  // Finally, register the components.
  for (const [name, component] of Object.entries(componentsRegistry)) {
    registerComponent(component, `${prefix}${name}`)
  }
}
