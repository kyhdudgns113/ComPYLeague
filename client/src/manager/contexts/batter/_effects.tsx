import {createContext, useContext, useEffect} from 'react'

import {useBatterCallbacksContext} from './_callbacks'

import type {FC, PropsWithChildren} from 'react'

import * as U from '@util'
import {useBatterActions} from '@redux'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const BatterEffectsContext = createContext<ContextType>({})

export const useBatterEffectsContext = () => useContext(BatterEffectsContext)

export const BatterEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  const {setMainBatterMatrix, setSubBatterMatrix} = useBatterActions()
  const {getBatterMatrix} = useBatterCallbacksContext()

  useEffect(() => {
    getBatterMatrix().then(res => {
      const {isSuccess} = res

      if (isSuccess) {
        const {mainBatterMatrix, subBatterMatrix} = res

        setMainBatterMatrix(mainBatterMatrix)
        setSubBatterMatrix(subBatterMatrix)
      } // ::
      else {
        U.alertErrors('BatterEffect', res)
      }
    })
  }, [])

  //
  return <BatterEffectsContext.Provider value={{}}>{children}</BatterEffectsContext.Provider>
}
