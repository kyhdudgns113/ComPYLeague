import {createContext, useContext, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

import {useBaseActions, useLefterActions, useRecordActions} from '@redux'

import type {FC, PropsWithChildren} from 'react'

import * as V from '@value'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const URLEffectsContext = createContext<ContextType>({})

export const useURLEffectsContext = () => useContext(URLEffectsContext)

export const URLEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  const {resetPageTeamName, setPageTeamName} = useBaseActions()
  const {resetLeagueNum, setLeagueNum} = useRecordActions()

  const location = useLocation()

  const LA = useLefterActions()

  // 자동 갱신 : URL 파싱하여 Lefter 상태 조절
  useEffect(() => {
    const pathParts = location.pathname.split('/main/')
    if (pathParts.length > 1) {
      const nowTab = pathParts[1].split('/')[0]

      switch (nowTab) {
        case 'setting':
          LA.setLefterTabSetting()
          break
        case 'pitchRecord':
          LA.setLefterTabPitchRecord()
          break
        default:
          LA.setLefterTabNull()
          break
      }
    } // ::
    else {
      LA.setLefterTabNull()
    }
  }, [location])

  // 자동 갱신 : URL 파싱하여 PageTeamName 조정 (타자 설정 페이지때만 작동)
  useEffect(() => {
    const pathParts = location.pathname.split('/main/')
    if (pathParts.length > 1) {
      const teamIdx = parseInt(pathParts[1])
      if (0 <= teamIdx && teamIdx < V.TEAM_IDX_ARR.length) {
        setPageTeamName(V.TEAM_NAME[teamIdx])
      } // ::
      else {
        resetPageTeamName()
      }
    }
  }, [location])

  // 자동 갱신 : leagueNum 구하기
  useEffect(() => {
    const pathParts = location.pathname.split('/pitchRecord/')
    if (pathParts.length > 1) {
      const leagueNum = parseInt(pathParts[1])
      if (0 < leagueNum) {
        setLeagueNum(leagueNum)
      } // ::
      else {
        resetLeagueNum()
      }
    }
  }, [location])

  return <URLEffectsContext.Provider value={{}}>{children}</URLEffectsContext.Provider>
}
