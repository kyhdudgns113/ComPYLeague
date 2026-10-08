import {createContext, useContext} from 'react'

import type {FC, PropsWithChildren} from 'react'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const BatterEffectsContext = createContext<ContextType>({})

export const useBatterEffectsContext = () => useContext(BatterEffectsContext)

export const BatterEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  //
  return <BatterEffectsContext.Provider value={{}}>{children}</BatterEffectsContext.Provider>
}
