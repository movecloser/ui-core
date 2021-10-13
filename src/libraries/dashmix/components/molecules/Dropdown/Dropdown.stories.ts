// Copyright © 2021 Move Closer

import { Meta, Story } from '@storybook/vue'

import {
  DropdownAlignmentMap, DropdownPositionMap
} from '../../../../../abstract/components/Dropdown'

import { SizeMap } from '../../../../../composables'

import { DashmixTheme } from '../../../contracts'

import { DashmixIconName } from '../../atoms/Icon'
import { DashmixDropdown } from './Dropdown'
import { DashmixDropdownProps } from './Dropdown.contracts'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const meta: Meta = {
  title: 'Ui Core / Dashmix / Dropdown',
  component: DashmixDropdown,
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: DropdownAlignmentMap
      }
    },
    icon: {
      control: {
        type: 'select',
        options: DashmixIconName
      }
    },
    openOnMount: {
      control: {
        type: 'boolean'
      }
    },
    position: {
      control: {
        type: 'select',
        options: DropdownPositionMap
      }
    },
    triggerSize: {
      control: {
        type: 'select',
        options: SizeMap
      }
    },
    triggerTheme: {
      control: {
        type: 'select',
        options: DashmixTheme
      }
    }
  }
}
export default meta

const Template: Story<DashmixDropdownProps> = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  template: `
    <DsDropdown v-bind="$props" />
  `
})
export const Dropdown = Template.bind({})
Dropdown.args = {
  align: DropdownAlignmentMap.Left,
  position: DropdownPositionMap.Down,
  label: 'Drop me',
  icon: 'ban',
  items: [
    {
      type: 'item',
      icon: 'redo',
      label: 'Redo',
      onClick: () => {
        console.log('Redo')
      }
    }, {
      type: 'item',
      icon: 'times',
      label: 'Without click'
    }, {
      type: 'divider'
    }, {
      type: 'item',
      icon: 'undo',
      label: 'Undo',
      onClick: () => {
        console.log('Undo')
      },
      theme: 'danger'
    }
  ],
  openOnMount: true,
  triggerSize: SizeMap.Medium,
  triggerTheme: DashmixTheme.Default
}
