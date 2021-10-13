// Copyright © 2021 Move Closer

import { computed, PropType, ref } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../../../../contracts'
import { Size, SizeMap } from '../../../../../composables'

import { DashmixIconName } from '../Icon'

import { DashmixFileProps, IFile } from './File.contracts'
import { mediaTypeIconNameRegistry } from './File.config'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const dashmixFileProps: ComponentObjectPropsOptions<DashmixFileProps> = {
  fallbackIcon: {
    type: String as PropType<DashmixIconName>,
    required: false,
    default: () => DashmixIconName.FileAltSolid
  },

  file: {
    type: Object as PropType<IFile>,
    required: true
  },

  draggable: {
    type: Boolean,
    required: false,
    default: true
  }
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const useDashmixFile = (props: DashmixFileProps) => {
  const fileLoadError = ref(false)
  /**
   * Determines whether the thumbnail should be shown.
   */
  const hasThumbnail = computed<boolean>(() => {
    return !fileLoadError.value && typeof props.file.thumbnail === 'string' &&
      props.file.thumbnail.length > 0
  })

  /**
   * Icon that should be used as a placeholder (fallback)
   * in case the file's thumbnail is not available.
   */
  const placeholderIcon = computed<{ name: DashmixIconName; size: Size }>(() => ({
    name: mediaTypeIconNameRegistry[props.file.type] || props.fallbackIcon,
    size: SizeMap.Medium
  }))

  return { fileLoadError, hasThumbnail, placeholderIcon }
}
