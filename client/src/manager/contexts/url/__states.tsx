import {createContext, useContext} from 'react'

import type {FC, PropsWithChildren} from 'react'

// prettier-ignore
type ContextType = {
  
}
// prettier-ignore
export const URLStatesContext = createContext<ContextType>({
  
})

export const useURLStatesContext = () => useContext(URLStatesContext)

export const URLStatesProvider: FC<PropsWithChildren> = ({children}) => {
  // prettier-ignore
  const value: ContextType = {
    
  }

  return <URLStatesContext.Provider value={value}>{children}</URLStatesContext.Provider>
}
