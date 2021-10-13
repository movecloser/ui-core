// Copyright © 2021 Move Closer

import { DashmixSelectItem } from '../../atoms/Select'

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const AVAILABLE_PER_PAGE: number[] = [10, 25, 50, 100, 500]

/**
 * @author Jan Dobrowolski <jan.dobrowolski@movecloser.pl>
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const perPageOptions: DashmixSelectItem[] =
  AVAILABLE_PER_PAGE.reduce<DashmixSelectItem[]>((acc, curr) => {
    return [
      ...acc,
      { label: `Pokaż ${curr} wpisów / stronę`, value: curr }
    ]
  }, [])
