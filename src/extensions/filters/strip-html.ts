// Copyright © 2021 Move Closer

/**
 * Filter that strip all html tags.
 *
 * @param  {String} value
 * @return {String}
 */
export default function (value: string): string {
  const div = document.createElement('div')
  div.innerHTML = value
  return (div.textContent || div.innerText || '')
}
