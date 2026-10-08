import {createContext, useContext} from 'react'

import type {FC, PropsWithChildren} from 'react'

// prettier-ignore
type ContextType = {
  
}
// prettier-ignore
export const BatterCallbacksContext = createContext<ContextType>({
  
})

export const useBatterCallbacksContext = () => useContext(BatterCallbacksContext)

export const BatterCallbacksProvider: FC<PropsWithChildren> = ({children}) => {
  // prettier-ignore
  const value: ContextType = {
    
  }
  return <BatterCallbacksContext.Provider value={value}>{children}</BatterCallbacksContext.Provider>
}
