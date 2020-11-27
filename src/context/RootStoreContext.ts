import {createContext} from 'react';
import {RootStoreType} from '../stores/RootStore';

export const RootStoreContext = createContext<RootStoreType | null>(null)
