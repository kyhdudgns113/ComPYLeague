import {createContext, useContext, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

import {useLefterActions} from '@redux'

import {useBatterStatesContext} from '../batter'

import type {FC, PropsWithChildren} from 'react'

import * as V from '@value'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const URLEffectsContext = createContext<ContextType>({})

export const useURLEffectsContext = () => useContext(URLEffectsContext)

export const URLEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  const {setTeamaName} = useBatterStatesContext()

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

  // 자동 갱신 : URL 파싱하여 팀 이름 갱신
  useEffect(() => {
    const pathParts = location.pathname.split('/main/setting/')
    if (pathParts.length > 1) {
      const teamIdx = parseInt(pathParts[1])

      if (!(0 <= teamIdx && teamIdx < 10)) {
        alert(`[URLEffect] teamIdx: ${teamIdx}`)
      }

      setTeamaName(V.TEAM_NAME[teamIdx])
    }
  }, [location])

  //
  return <URLEffectsContext.Provider value={{}}>{children}</URLEffectsContext.Provider>
}
