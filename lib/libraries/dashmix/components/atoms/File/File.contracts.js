"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideoType = exports.ImageType = exports.DocumentType = exports.AudioType = void 0;
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
var AudioType;
(function (AudioType) {
    AudioType["MP3"] = "mp3";
})(AudioType = exports.AudioType || (exports.AudioType = {}));
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
var DocumentType;
(function (DocumentType) {
    DocumentType["CSV"] = "csv";
    DocumentType["DOC"] = "doc";
    DocumentType["DOCX"] = "docx";
    DocumentType["PDF"] = "pdf";
    DocumentType["XLS"] = "xls";
})(DocumentType = exports.DocumentType || (exports.DocumentType = {}));
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
var ImageType;
(function (ImageType) {
    ImageType["GIF"] = "gif";
    ImageType["JPEG"] = "jpeg";
    ImageType["JPG"] = "jpg";
    ImageType["PNG"] = "png";
    ImageType["SVG"] = "svg";
})(ImageType = exports.ImageType || (exports.ImageType = {}));
// TypeScript has beaten me here 😔
// I admit, I have no idea how to overcome this enum merging
// and avoid typing the Record with "string"...
//
// export type MediaTypeIconNameRegistry = Record<MediaType, IconName>
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
var VideoType;
(function (VideoType) {
    VideoType["MOV"] = "mov";
    VideoType["MP4"] = "mp4";
    VideoType["MPEG"] = "mpeg";
})(VideoType = exports.VideoType || (exports.VideoType = {}));
