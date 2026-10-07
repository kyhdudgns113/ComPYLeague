import {createContext, useContext, useState} from 'react'

import type {FC, PropsWithChildren} from 'react'

import * as LT from '@localType'
import * as OT from '@objectType'

// prettier-ignore
type ContextType = {
  CPArr: OT.PitcherType[], setCPArr: LT.Setter<OT.PitcherType[]>,
  RPArr: OT.PitcherType[], setRPArr: LT.Setter<OT.PitcherType[]>,
  SPArr: OT.PitcherType[], setSPArr: LT.Setter<OT.PitcherType[]>,

  movePitcherOId: string, setMovePitcherOId: LT.Setter<string>,
}
// prettier-ignore
export const PitcherStatesContext = createContext<ContextType>({
  CPArr: [], setCPArr: () => {},
  RPArr: [], setRPArr: () => {},
  SPArr: [], setSPArr: () => {},

  movePitcherOId: '', setMovePitcherOId: () => {},
})

export const usePitcherStatesContext = () => useContext(PitcherStatesContext)

export const PitcherStatesProvider: FC<PropsWithChildren> = ({children}) => {
  // 투수 배열들
  const [CPArr, setCPArr] = useState<OT.PitcherType[]>([])
  const [RPArr, setRPArr] = useState<OT.PitcherType[]>([])
  const [SPArr, setSPArr] = useState<OT.PitcherType[]>([])

  // 드래그중인 투수의 ObjectID
  const [movePitcherOId, setMovePitcherOId] = useState<string>('')

  // prettier-ignore
  const value: ContextType = {
    CPArr, setCPArr,
    RPArr, setRPArr,
    SPArr, setSPArr,

    movePitcherOId, setMovePitcherOId
  }

  return <PitcherStatesContext.Provider value={value}>{children}</PitcherStatesContext.Provider>
}
