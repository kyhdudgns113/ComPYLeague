import {createContext, useContext, useEffect} from 'react'

import {usePitcherStatesContext} from './__states'

import type {FC, PropsWithChildren} from 'react'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const PitcherEffectsContext = createContext<ContextType>({})

export const usePitcherEffectsContext = () => useContext(PitcherEffectsContext)

export const PitcherEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  const {setPitcherArr} = usePitcherStatesContext()

  // 자동 갱신: pitcherArr
  useEffect(() => {
    //
  }, [])
  //
  return <PitcherEffectsContext.Provider value={{}}>{children}</PitcherEffectsContext.Provider>
}
