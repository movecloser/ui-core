// Copyright © 2021 Move Closer

import { DashmixAccordionStylePreset, DashmixAccordionType } from './Accordion.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 *
 * TODO: Consider better approach of styling.
 */
export const dashmixAccordionStylePresets: Record<DashmixAccordionType, DashmixAccordionStylePreset> = {
  default: {
    main: 'block mb-0',
    labelWrapper: 'block-header block-header-default p-0',
    label: 'font-w600 d-block w-100 p-3'
  }
}
