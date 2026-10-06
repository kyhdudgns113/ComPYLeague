import {createContext, useContext, useEffect} from 'react'

import {MY_TEAM_NAME} from '@value'

import {usePitcherCallbacksContext} from './_callbacks'
import {usePitcherStatesContext} from './__states'

import type {FC, PropsWithChildren} from 'react'

import * as U from '@util'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const PitcherEffectsContext = createContext<ContextType>({})

export const usePitcherEffectsContext = () => useContext(PitcherEffectsContext)

export const PitcherEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  const {setPitcherArr} = usePitcherStatesContext()
  const {getPitcherArr} = usePitcherCallbacksContext()

  // 자동 갱신: pitcherArr
  useEffect(() => {
    getPitcherArr(MY_TEAM_NAME).then(res => {
      const {isSuccess} = res
      if (isSuccess) {
        setPitcherArr(res.pitcherArr)
      } // ::
      else {
        U.alertErrors('PitcherEffect', res)
      }
    })
  }, [])
  //
  return <PitcherEffectsContext.Provider value={{}}>{children}</PitcherEffectsContext.Provider>
}
