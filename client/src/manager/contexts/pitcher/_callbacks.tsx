import {createContext, useCallback, useContext} from 'react'

import type {FC, PropsWithChildren} from 'react'

import * as CT from '@commonType'
import * as F from '@fetch'
import * as LT from '@localType'
import * as U from '@util'

// prettier-ignore
type ContextType = {
  getPitcherArr: (teamName: CT.Type_Team) => Promise<LT.APIReturnType>
}
// prettier-ignore
export const PitcherCallbacksContext = createContext<ContextType>({
  getPitcherArr: () => Promise.resolve({isSuccess: false}),
})

export const usePitcherCallbacksContext = () => useContext(PitcherCallbacksContext)

export const PitcherCallbacksProvider: FC<PropsWithChildren> = ({children}) => {
  // GET AREA:

  const getPitcherArr = useCallback((teamName: CT.Type_Team) => {
    const url = `/setting/readTeamPitcherArr/${teamName}`
    return F.get(url, null)
      .then(res => res.json())
      .then(res => {
        const {ok, body, statusCode, gkdErrMsg, message} = res
        if (ok) {
          const {CPArr, RPArr, SPArr} = body
          if (!CPArr || !RPArr || !SPArr) {
            return {isSuccess: false, errMsg: 'pitcherArr is falsy'} as LT.APIReturnType
          }
          return {isSuccess: true, CPArr, RPArr, SPArr} as LT.APIReturnType
        } // ::
        else {
          U.alertErrMsg(url, statusCode, gkdErrMsg, message)
          return {isSuccess: false} as LT.APIReturnType
        }
      })
      .catch(errObj => {
        U.alertErrors(url, errObj)
        return {isSuccess: false} as LT.APIReturnType
      })
  }, [])

  // prettier-ignore
  const value: ContextType = {
    getPitcherArr
  }
  return <PitcherCallbacksContext.Provider value={value}>{children}</PitcherCallbacksContext.Provider>
}
