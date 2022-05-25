import { MakeUsecase } from './makeUsecase'
import { makeResolvers } from './makeResolvers'
import { Container } from 'inversify'

export const makeAll = (container: Container) => {
  const makers = [makeResolvers, MakeUsecase]

  for (const maker of makers) {
    maker(container)
  }

  return container
}
