// Copyright © 2021 Move Closer

/**
 * Filter that trim string to given length.
 *
 * @param  {String} value
 * @param length
 * @param add
 * @return {String}
 */
export default function (value: string, length: number = 25, add: string = '...'): string {
  return (value.length > length) ? `${value.slice(0, length)}${add}` : value
}
