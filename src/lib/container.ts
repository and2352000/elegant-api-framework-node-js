import * as awilix from 'awilix';

export const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.CLASSIC,
    strict: true,
  })

export { awilix };