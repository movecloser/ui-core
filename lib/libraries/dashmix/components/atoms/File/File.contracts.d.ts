import { Data } from '@vue/composition-api';
import { DashmixIconName } from '../Icon';
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare enum AudioType {
    MP3 = "mp3"
}
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare enum DocumentType {
    CSV = "csv",
    DOC = "doc",
    DOCX = "docx",
    PDF = "pdf",
    XLS = "xls"
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
export declare enum ImageType {
    GIF = "gif",
    JPEG = "jpeg",
    JPG = "jpg",
    PNG = "png",
    SVG = "svg"
}
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare type MediaType = AudioType | DocumentType | ImageType | VideoType;
/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare type MediaTypeIconNameRegistry = Record<string, DashmixIconName>;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export declare enum VideoType {
    MOV = "mov",
    MP4 = "mp4",
    MPEG = "mpeg"
}
