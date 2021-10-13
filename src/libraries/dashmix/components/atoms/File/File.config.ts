// Copyright © 2021 Move Closer

import { DashmixIconName } from '../Icon'

import {
  AudioType,
  DocumentType,
  ImageType,
  MediaType,
  MediaTypeIconNameRegistry,
  VideoType
} from './File.contracts'

/**
 * Configuration object that binds one of the `MediaType`'s sub-enums
 * with the corresponding `IconName`.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 *
 * @see MediaType
 * @see DashmixIconName
 */
interface ConfigSet {
  fileTypes: { [key: string]: MediaType };
  iconName: DashmixIconName;
}

/**
 * Array of configurations that bind the `MediaType`'s sub-enums
 * with the corresponding `IconName`.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const configSets: ConfigSet[] = [
  { fileTypes: AudioType, iconName: DashmixIconName.FileAudio },
  { fileTypes: DocumentType, iconName: DashmixIconName.FileAlt },
  { fileTypes: ImageType, iconName: DashmixIconName.Image },
  { fileTypes: VideoType, iconName: DashmixIconName.FileVideo }
]

/**
 * Registry that binds the `MediaType` values (file extensions) with the applicable `IconName`.
 *
 * @example
 *   {
 *     'mp4': IconName.FileVideo,
 *     'mp3': IconName.FileAudio,
 *     'docx': IconName.FileDocument,
 *   }
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const mediaTypeIconNameRegistry: MediaTypeIconNameRegistry =
  configSets.reduce<MediaTypeIconNameRegistry>((registry, configSet) => {
    /**
     * Array of file types (extensions) extracted from the currently-processed `ConfigSet`.
     *
     * @see MediaType
     * @see AudioType
     * @see DocumentType
     * @see ImageType
     * @see VideoType
     */
    const fileTypes: MediaType[] = Object.values(configSet.fileTypes)

    /**
     * The `IconName` applicable to the given file types.
     *
     * @see fileTypes
     * @see ConfigSet
     */
    const iconName: DashmixIconName = configSet.iconName

    /**
     * Sub-registry containing the `IconName` associations for the **currently-processed** file types.
     *
     * @example
     *   {
     *     'mp4': IconName.FileVideo,
     *     'mov': IconName.FileVideo
     *   }
     */
    const subRegistry: MediaTypeIconNameRegistry = fileTypes.reduce<MediaTypeIconNameRegistry>((
      acc,
      fileType
    ) => {
      return { ...acc, [fileType as string]: iconName }
    }, {})

    return { ...registry, ...subRegistry }
  }, {})
