// Copyright © 2021 Move Closer

import { computed, ref, watch } from '@vue/composition-api'

import { ComponentObjectPropsOptions } from '../../contracts'

import { DoubleClick, DoubleClickCallback, UseDoubleClickProvides } from './double-click.contracts'

const defaultPeriod = 600

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export const doubleClickProps: ComponentObjectPropsOptions<DoubleClick> = {
  /**
   * Specify delay between clicks to not cancel them.
   */
  clickPeriod: {
    type: Number,
    required: false,
    default: defaultPeriod
  },

  /**
   * Determine of double click should be considered.
   */
  doubleClick: {
    type: Boolean,
    required: false,
    default: false
  }
}

/**
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export function useDoubleClick (
  onDouble: DoubleClickCallback,
  turnedOn: boolean,
  clickPeriod: number = defaultPeriod
): UseDoubleClickProvides {
  const clicksCount = ref<number>(0)

  const resetClicks = () => {
    clicksCount.value = 0
  }

  const handlePartialClick = () => {
    clicksCount.value++
    setTimeout(() => resetClicks(), clickPeriod)
  }

  const handleClick = () => {
    turnedOn ? handlePartialClick() : onDouble()
  }

  const isPendingClick = computed<boolean>(() => {
    return clicksCount.value > 0
  })

  watch(clicksCount, clicks => {
    if (clicks === 2) {
      onDouble()
    }
  })

  return { handleClick, isPendingClick }
}
