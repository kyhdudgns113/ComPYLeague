import {createContext, useContext, useEffect} from 'react'

import {usePitcherCallbacksContext} from './_callbacks'

import type {FC, PropsWithChildren} from 'react'

import * as U from '@util'
import {usePitcherActions} from '@redux'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const PitcherEffectsContext = createContext<ContextType>({})

export const usePitcherEffectsContext = () => useContext(PitcherEffectsContext)

export const PitcherEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  const {setCPMatrix, setRPMatrix, setSPMatrix} = usePitcherActions()
  const {getPitcherMatrixAll} = usePitcherCallbacksContext()

  // 자동 갱신: pitcherArr
  useEffect(() => {
    getPitcherMatrixAll().then(res => {
      const {isSuccess} = res
      if (isSuccess) {
        setCPMatrix(res.CPMatrix)
        setRPMatrix(res.RPMatrix)
        setSPMatrix(res.SPMatrix)
      } // ::
      else {
        U.alertErrors('PitcherEffect', res)
      }
    })
  }, [])
  //
  return <PitcherEffectsContext.Provider value={{}}>{children}</PitcherEffectsContext.Provider>
}
