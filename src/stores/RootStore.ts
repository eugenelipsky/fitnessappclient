import {getEnv, Instance, types} from 'mobx-state-tree'
import { AuthStore } from './AuthStore'
import { ProgramStore } from './ProgramStore'

export const RootStoreModel = types.model('RootStore').props({
  authStore: types.optional(AuthStore, {}),
  programStore: types.optional(ProgramStore, {}),
})
  .views(self => ({
    get navigation() {
      return(getEnv(self)).navigation
    }
  }))

export interface RootStoreType extends Instance<typeof RootStoreModel> {}

