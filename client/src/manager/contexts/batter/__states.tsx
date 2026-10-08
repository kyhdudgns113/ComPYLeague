import {createContext, useContext, useState} from 'react'

import type {FC, PropsWithChildren} from 'react'

import * as CT from '@commonType'
import * as LT from '@localType'
import * as OT from '@objectType'
import * as V from '@value'

// prettier-ignore
type ContextType = {
  mainBatterArr: OT.BatterType[], setMainBatterArr: LT.Setter<OT.BatterType[]>,
  subBatterArr: OT.BatterType[], setSubBatterArr: LT.Setter<OT.BatterType[]>,
  teamName: CT.Type_Team, setTeamaName: LT.Setter<CT.Type_Team>, 
}
// prettier-ignore
export const BatterStatesContext = createContext<ContextType>({
  mainBatterArr: [], setMainBatterArr: () => {},
  subBatterArr: [], setSubBatterArr: () => {},
  teamName: V.MY_TEAM_NAME, setTeamaName: () => {}
})

export const useBatterStatesContext = () => useContext(BatterStatesContext)

export const BatterStatesProvider: FC<PropsWithChildren> = ({children}) => {
  const [mainBatterArr, setMainBatterArr] = useState<OT.BatterType[]>([])
  const [subBatterArr, setSubBatterArr] = useState<OT.BatterType[]>([])
  const [teamName, setTeamaName] = useState<CT.Type_Team>(V.MY_TEAM_NAME)

  // prettier-ignore
  const value: ContextType = {
    mainBatterArr, setMainBatterArr,
    subBatterArr, setSubBatterArr,
    teamName, setTeamaName
  }

  return <BatterStatesContext.Provider value={value}>{children}</BatterStatesContext.Provider>
}
