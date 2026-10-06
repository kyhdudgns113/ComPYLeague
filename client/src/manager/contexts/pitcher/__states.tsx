import {createContext, useContext, useState} from 'react'

import type {FC, PropsWithChildren} from 'react'

import * as LT from '@localType'
import * as OT from '@objectType'

// prettier-ignore
type ContextType = {
  CPArr: OT.PitcherType[], setCPArr: LT.Setter<OT.PitcherType[]>,
  RPArr: OT.PitcherType[], setRPArr: LT.Setter<OT.PitcherType[]>,
  SPArr: OT.PitcherType[], setSPArr: LT.Setter<OT.PitcherType[]>,
}
// prettier-ignore
export const PitcherStatesContext = createContext<ContextType>({
  CPArr: [], setCPArr: () => {},
  RPArr: [], setRPArr: () => {},
  SPArr: [], setSPArr: () => {},
})

export const usePitcherStatesContext = () => useContext(PitcherStatesContext)

export const PitcherStatesProvider: FC<PropsWithChildren> = ({children}) => {
  const [CPArr, setCPArr] = useState<OT.PitcherType[]>([])
  const [RPArr, setRPArr] = useState<OT.PitcherType[]>([])
  const [SPArr, setSPArr] = useState<OT.PitcherType[]>([])

  // prettier-ignore
  const value: ContextType = {
    CPArr, setCPArr,
    RPArr, setRPArr,
    SPArr, setSPArr
  }

  return <PitcherStatesContext.Provider value={value}>{children}</PitcherStatesContext.Provider>
}
