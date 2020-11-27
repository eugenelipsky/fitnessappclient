import {RootStoreType} from '../stores/RootStore';
import {useContext} from 'react';
import {RootStoreContext} from '../context/RootStoreContext';

export const useRootStore = (): RootStoreType => {
  const store = useContext(RootStoreContext)
  if(!store) {
    throw new Error('The RootStoreContext is not provided using the <RootStoreProvider>')
  }

  return store;
}
