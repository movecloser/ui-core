// Copyright © 2021 Move Closer

/**
 * @author Packhelp
 */
export const getAbbreviation = (text: string): string => {
  return text
    .trim()
    .split(' ')
    .reduce(
      (
        previousValue: string,
        currentValue: string,
        currentIndex: number,
        array: string[]
      ) => {
        const firstLetter: string = currentValue.substring(
          0,
          array.length === 1 ? 2 : 1
        )
        if (currentIndex === 0 || currentIndex === array.length - 1) {
          return `${previousValue}${firstLetter}`
        }
        return previousValue
      },
      ''
    )
}

/**
 * @author Packhelp
 */
export const getHSLAColorFromString = (text: string): string => {
  let hash = 0
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash)
  }
  const h = hash % 360
  const s = (hash % 20) + 70
  const l = (hash % 20) + 45

  return `hsla(${h}, ${s}%, ${l}%, 0.8)`
}
