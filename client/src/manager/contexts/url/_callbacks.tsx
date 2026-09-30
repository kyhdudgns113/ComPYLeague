import {createContext, useContext} from 'react'

import type {FC, PropsWithChildren} from 'react'

// prettier-ignore
type ContextType = {
  
}
// prettier-ignore
export const URLCallbacksContext = createContext<ContextType>({
  
})

export const useURLCallbacksContext = () => useContext(URLCallbacksContext)

export const URLCallbacksProvider: FC<PropsWithChildren> = ({children}) => {
  // prettier-ignore
  const value: ContextType = {
    
  }
  return <URLCallbacksContext.Provider value={value}>{children}</URLCallbacksContext.Provider>
}
