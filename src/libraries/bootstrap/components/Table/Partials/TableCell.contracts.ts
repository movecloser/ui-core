// Copyright © 2021 Move Closer

import { AnyObject } from '@movecloser/front-core'
import { VueConstructor } from 'vue'

export interface TableCell {
  component?: VueConstructor;
  key: string;
  value: string | AnyObject
}
