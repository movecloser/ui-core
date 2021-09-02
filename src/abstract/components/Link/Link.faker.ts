// Copyright © 2021 Move Closer

import * as faker from 'faker'

import { Link } from './Link.contracts'

/**
 * @author Stanisław Gregor <stanislaw.gregor@movecloser.pl>
 */
export const fakeLink: Link = {
  isExternal: false,
  label: faker.lorem.words(),
  newTab: false,
  target: { path: faker.internet.url() }
}
