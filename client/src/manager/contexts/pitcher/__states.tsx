import {createContext, useContext, useState} from 'react'

import type {FC, PropsWithChildren} from 'react'

import * as LT from '@localType'
import * as OT from '@objectType'

// prettier-ignore
type ContextType = {
  pitcherArr: OT.PitcherType[], setPitcherArr: LT.Setter<OT.PitcherType[]>
}
// prettier-ignore
export const PitcherStatesContext = createContext<ContextType>({
  pitcherArr: [], setPitcherArr: () => {}
})

export const usePitcherStatesContext = () => useContext(PitcherStatesContext)

export const PitcherStatesProvider: FC<PropsWithChildren> = ({children}) => {
  const [pitcherArr, setPitcherArr] = useState<OT.PitcherType[]>([])

  // prettier-ignore
  const value: ContextType = {
    pitcherArr, setPitcherArr
  }

  return <PitcherStatesContext.Provider value={value}>{children}</PitcherStatesContext.Provider>
}
