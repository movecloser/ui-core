// Copyright © 2021 Move Closer

import { computed, PropType, SetupContext } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'

import { DashmixBoxMode, DashmixBoxModeMap, DashmixBoxProps } from './Box.contracts'

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const dashmixBoxProps: ComponentObjectPropsOptions<DashmixBoxProps> = {
  bodyClass: {
    type: String,
    required: false,
    default: ''
  },
  footerClass: {
    type: String,
    required: false,
    default: ''
  },
  footerMode: {
    type: String as PropType<DashmixBoxMode>,
    required: false,
    default: () => DashmixBoxModeMap.Clean
  },
  headerClass: {
    type: String,
    required: false,
    default: ''
  },
  headerMode: {
    type: String as PropType<DashmixBoxMode>,
    required: false,
    default: () => DashmixBoxModeMap.Clean
  },
  noBodyPadding: {
    type: Boolean,
    required: false,
    default: false
  },
  shadow: {
    type: Boolean,
    required: false,
    default: false
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function useDashmixBox (props: DashmixBoxProps, ctx: SetupContext) {
  const isFooterDivided = computed<boolean>(() => {
    return props.footerMode === DashmixBoxModeMap.Divided
  })
  const isHeaderDivided = computed<boolean>(() => {
    return props.headerMode === DashmixBoxModeMap.Divided
  })

  const bodyPaddingClass = computed<string>(() => {
    if (props.noBodyPadding) {
      return 'p-0'
    }

    const classes: string[] = []
    if (isFooterDivided) {
      classes.push('block-content-full')
    }

    return classes.join(' ')
  })

  return { bodyPaddingClass, isFooterDivided, isHeaderDivided }
}
