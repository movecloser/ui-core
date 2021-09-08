// Copyright © 2021 Move Closer

import { defineComponent } from '@vue/composition-api'

import { bootstrapTableProps } from './Table.hooks'

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export const BootstrapTable = defineComponent({
  name: 'BootstrapTable',
  props: bootstrapTableProps,

  data () {
    return {
      titles: [
        { key: 'position', label: 'Stanowisko' },
        { key: 'department', label: 'Dział' },
        { key: 'place', label: 'Miejsce pracy' }
      ],
      items: [
        { name: 'Ekspert ds. Rynku OZE i Transformacji Energetycznej', departmentName: 'IT / Security', placeName: 'Warszawa' },
        { name: 'Ekspert ds. Zrównoważonego Rozwoju', departmentName: 'Finanse', placeName: 'Kraków' },
        { name: 'Ekspert ds. Rynku OZE i Transformacji Energetycznej', departmentName: 'IT / Security', placeName: 'Warszawa' },
        { name: 'Ekspert ds. Zrównoważonego Rozwoju', departmentName: 'Finanse', placeName: 'Kraków' }
      ]
    }
  },

  template: `
    <div>
      <b-table small :fields="titles" :items="items" responsive="sm">

        <h1> {{ head }}</h1>

        <template #cell(position)="data">
          <div class="font-weight-bold border-dark">
          {{ data.item.name }}
          </div>
        </template>

        <template #cell(department)="data">
          {{ data.item.departmentName }}
        </template>

        <template #cell(place)="data">
          {{ data.item.placeName }}
        </template>

      </b-table>
    </div>
  `
})
