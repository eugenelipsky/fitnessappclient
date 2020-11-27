import React, {useState} from 'react';
import {RootStoreModel} from '../stores/RootStore';
import {RootStoreContext} from './RootStoreContext';
import persist from 'mst-persist';

export const RootStoreProvider: React.FC = ({children}) => {
  const [rootStore] = useState(() => RootStoreModel.create())
  persist('root', rootStore)
  return (
    <RootStoreContext.Provider value={rootStore}>
      {children}
    </RootStoreContext.Provider>
  )
}
