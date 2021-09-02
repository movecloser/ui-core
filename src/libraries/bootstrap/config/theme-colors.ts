// Copyright © 2021 Move Closer

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
type ThemeColors = string[]

/**
 * @param color
 * @param shades
 *
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
const generateColorShades = (color: string, shades: number[]): ThemeColors => shades.map(shade => `${color}-${shade}`)

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const bootstrapThemeColors: ThemeColors = [
  ...generateColorShades('blue', [0, 20, 40, 60, 80, 100]),
  ...generateColorShades('brand', [0, 20, 40, 60, 80, 100]),
  ...generateColorShades('cta', [0, 20, 40, 60, 80, 100]),
  ...generateColorShades('gray', [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]),
  ...generateColorShades('green', [0, 20, 40, 60, 80, 100]),
  'black',
  'blue',
  'brand',
  'cta',
  'dark',
  'green',
  'light',
  'primary',
  'secondary',
  'white'
]
