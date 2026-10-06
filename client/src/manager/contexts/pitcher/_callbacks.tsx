import {createContext, useContext} from 'react'

import type {FC, PropsWithChildren} from 'react'

import * as F from '@fetch'

// prettier-ignore
type ContextType = {
  
}
// prettier-ignore
export const PitcherCallbacksContext = createContext<ContextType>({
  
})

export const usePitcherCallbacksContext = () => useContext(PitcherCallbacksContext)

export const PitcherCallbacksProvider: FC<PropsWithChildren> = ({children}) => {
  // prettier-ignore
  const value: ContextType = {
    
  }
  return <PitcherCallbacksContext.Provider value={value}>{children}</PitcherCallbacksContext.Provider>
}
