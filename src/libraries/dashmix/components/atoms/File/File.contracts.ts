// Copyright © 2021 Move Closer

import { Data } from '@vue/composition-api'

import { DashmixIconName } from '../Icon'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export enum AudioType {
  MP3 = 'mp3'
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export enum DocumentType {
  CSV = 'csv',
  DOC = 'doc',
  DOCX = 'docx',
  PDF = 'pdf',
  XLS = 'xls',
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface DashmixFileProps extends Data {
  /**
   * Determines whether the thumbnail image should be draggable.
   *
   * @see https://stackoverflow.com/a/7439078/11869579
   */
  draggable: boolean;
  fallbackIcon: DashmixIconName;
  file: IFile;
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export interface IFile {
  thumbnail?: string;
  type: MediaType;
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export enum ImageType {
  GIF = 'gif',
  JPEG = 'jpeg',
  JPG = 'jpg',
  PNG = 'png',
  SVG = 'svg',
}

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type MediaType = AudioType | DocumentType | ImageType | VideoType

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export type MediaTypeIconNameRegistry = Record<string, DashmixIconName>

// TypeScript has beaten me here 😔
// I admit, I have no idea how to overcome this enum merging
// and avoid typing the Record with "string"...
//
// export type MediaTypeIconNameRegistry = Record<MediaType, IconName>

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export enum VideoType {
  MOV = 'mov',
  MP4 = 'mp4',
  MPEG = 'mpeg',
}
