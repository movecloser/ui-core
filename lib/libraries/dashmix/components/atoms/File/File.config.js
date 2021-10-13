"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaTypeIconNameRegistry = void 0;
const Icon_1 = require("../Icon");
const File_contracts_1 = require("./File.contracts");
/**
 * Array of configurations that bind the `MediaType`'s sub-enums
 * with the corresponding `IconName`.
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const configSets = [
    { fileTypes: File_contracts_1.AudioType, iconName: Icon_1.DashmixIconName.FileAudio },
    { fileTypes: File_contracts_1.DocumentType, iconName: Icon_1.DashmixIconName.FileAlt },
    { fileTypes: File_contracts_1.ImageType, iconName: Icon_1.DashmixIconName.Image },
    { fileTypes: File_contracts_1.VideoType, iconName: Icon_1.DashmixIconName.FileVideo }
];
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
exports.mediaTypeIconNameRegistry = configSets.reduce((registry, configSet) => {
    /**
     * Array of file types (extensions) extracted from the currently-processed `ConfigSet`.
     *
     * @see MediaType
     * @see AudioType
     * @see DocumentType
     * @see ImageType
     * @see VideoType
     */
    const fileTypes = Object.values(configSet.fileTypes);
    /**
     * The `IconName` applicable to the given file types.
     *
     * @see fileTypes
     * @see ConfigSet
     */
    const iconName = configSet.iconName;
    /**
     * Sub-registry containing the `IconName` associations for the **currently-processed** file types.
     *
     * @example
     *   {
     *     'mp4': IconName.FileVideo,
     *     'mov': IconName.FileVideo
     *   }
     */
    const subRegistry = fileTypes.reduce((acc, fileType) => {
        return { ...acc, [fileType]: iconName };
    }, {});
    return { ...registry, ...subRegistry };
}, {});
