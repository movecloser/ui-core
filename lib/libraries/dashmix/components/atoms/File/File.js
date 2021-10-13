"use strict";
// Copyright © 2021 Move Closer
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashmixFile = void 0;
const composition_api_1 = require("@vue/composition-api");
const Icon_1 = require("../Icon");
const File_hooks_1 = require("./File.hooks");
/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
exports.DashmixFile = composition_api_1.defineComponent({
    name: 'DashmixFile',
    components: { DashmixIcon: Icon_1.DashmixIcon },
    props: File_hooks_1.dashmixFileProps,
    setup(props) {
        return File_hooks_1.useDashmixFile(props);
    },
    template: `
    <div class="file-thumbnail">
    <img v-if="hasThumbnail" :src="file.thumbnail" alt="" class="img-fluid d-block"
         @error="fileLoadError = true" v-bind="{ draggable }">
    <DashmixIcon v-else :icon="placeholderIcon.name" :size="placeholderIcon.size" />
    </div>
  `
});
