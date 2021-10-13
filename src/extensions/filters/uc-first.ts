// Copyright © 2021 Move Closer

/**
 * Uppercases the first letter of the input string.
 *
 * @author Łukasz Sitnicki <lukasz.sitnicki@movecloser.pl>
 */
export default function (value: string | null): string {
  if (!value) {
    return ''
  }

  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}
