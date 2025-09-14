'use client'

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import type { ChildrenType } from './layout';

const AppProviders = ({children}: ChildrenType) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default AppProviders
