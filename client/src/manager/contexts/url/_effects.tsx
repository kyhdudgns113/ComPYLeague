import {createContext, useContext, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

import type {FC, PropsWithChildren} from 'react'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const URLEffectsContext = createContext<ContextType>({})

export const useURLEffectsContext = () => useContext(URLEffectsContext)

export const URLEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  const location = useLocation()

  // useEffect(() => {}, [location])
  //
  return <URLEffectsContext.Provider value={{}}>{children}</URLEffectsContext.Provider>
}
