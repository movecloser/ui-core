// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import { DashmixFile } from './File'
import { AudioType, DocumentType, DashmixFileProps, ImageType, VideoType } from './File.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / File',
  component: DashmixFile
}
export default meta

const Template: Story<DashmixFileProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <DsFile v-bind="{ file }" />
  `
})

/************************************************
 * Image.
 */
export const Image = Template.bind({})
Image.args = {
  file: {
    thumbnail: 'https://www.gstatic.com/webp/gallery/1.jpg',
    type: ImageType.JPG
  }
}

/************************************************
 * Audio.
 */
export const Audio = Template.bind({})
Audio.args = {
  file: {
    type: AudioType.MP3
  }
}

/************************************************
 * Document.
 */
export const Document = Template.bind({})
Document.args = {
  file: {
    type: DocumentType.DOC
  }
}

/************************************************
 * Video.
 */
export const Video = Template.bind({})
Video.args = {
  file: {
    type: VideoType.MP4
  }
}
