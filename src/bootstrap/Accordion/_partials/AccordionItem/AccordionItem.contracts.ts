// Copyright © 2021 Move Closer

import { Data, Ref } from '@vue/composition-api'
import { VueConstructor } from 'vue'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export interface IBootstrapAccordionItem {
  /**
   * Vue component to inject into the item's body.
   */
  component: VueConstructor;

  disabled?: boolean;

  /**
   * Item's unique ID.
   */
  id: string;

  /**
   * Item's label.
   */
  label: string;

  /**
   * Function that should be invoke while toggle.
   */
  onToggle?: () => boolean;

  /**
   * Optional props for the injected Vue component.
   *
   * @see IBootstrapAccordionItem.component
   */
  props?: Data;
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface BootstrapAccordionItemProps extends Data {
  /**
   * @see IBootstrapAccordionItem.id
   */
  id: IBootstrapAccordionItem['id'];

  /**
   * Determines whether the item should be opened.
   */
  isOpen: boolean;

  /**
   * Function that should be invoke while toggle.
   */
  onToggle?: () => boolean;

  /**
   * @see IBootstrapAccordionItem.label
   */
  label: IBootstrapAccordionItem['label'];
}

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface UseBootstrapAccordionItemProvides {
  collapseMaxHeight: Ref<string>;
  collapseRef: Ref<HTMLDivElement | null>;
  onTogglerClick: () => unknown
  updateMaxHeight: () => unknown
}
