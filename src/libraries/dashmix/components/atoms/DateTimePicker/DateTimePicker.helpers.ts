// Copyright © 2021 Move Closer

/**
 * @author Michał Rossian <michal.rossian@movecloser.pl>
 */
export function disabledAfterToday (date: Date) {
  const today = new Date()

  return date > today
}

export function disabledBeforeToday (date: Date) {
  const today = new Date()
  today.setDate(today.getDate() - 1)

  return date < today
}
