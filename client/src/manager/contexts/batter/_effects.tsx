import {createContext, useContext, useEffect} from 'react'

import {useBatterStatesContext} from './__states'
import {useBatterCallbacksContext} from './_callbacks'

import type {FC, PropsWithChildren} from 'react'

import * as U from '@util'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const BatterEffectsContext = createContext<ContextType>({})

export const useBatterEffectsContext = () => useContext(BatterEffectsContext)

export const BatterEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  const {teamName, setMainBatterArr, setSubBatterArr} = useBatterStatesContext()
  const {getBatterArr} = useBatterCallbacksContext()

  useEffect(() => {
    getBatterArr(teamName).then(res => {
      const {isSuccess} = res

      if (isSuccess) {
        const {mainBatterArr, subBatterArr} = res

        setMainBatterArr(mainBatterArr)
        setSubBatterArr(subBatterArr)
      } // ::
      else {
        U.alertErrors('BatterEffect', res)
      }
    })
  }, [teamName])

  //
  return <BatterEffectsContext.Provider value={{}}>{children}</BatterEffectsContext.Provider>
}
