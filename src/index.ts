// Copyright © 2021 Move Closer

import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

import { Example } from './components/Example'

Vue.use(VueCompositionAPI)

Vue.component('Example', Example)
