import {createContext, useCallback, useContext} from 'react'

import type {FC, PropsWithChildren} from 'react'

import * as CT from '@commonType'
import * as F from '@fetch'
import * as HTTP from '@httpType'
import * as LT from '@localType'
import * as U from '@util'

// prettier-ignore
type ContextType = {
  addBatter: (batterClass: CT.Type_BatterClass, batterHand: CT.Type_BatterHand, hasPressureSkill: boolean, name: string, teamName: CT.Type_Team) => Promise<LT.APIReturnType>
}
// prettier-ignore
export const BatterCallbacksContext = createContext<ContextType>({
  addBatter: () => Promise.resolve({isSuccess: false})
})

export const useBatterCallbacksContext = () => useContext(BatterCallbacksContext)

export const BatterCallbacksProvider: FC<PropsWithChildren> = ({children}) => {
  // POST AREA:
  const addBatter = useCallback(
    async (batterClass: CT.Type_BatterClass, batterHand: CT.Type_BatterHand, hasPressureSkill: boolean, name: string, teamName: CT.Type_Team) => {
      const url = '/setting/addBatter'
      const data: HTTP.HTTP_AddBatter = {
        batterClass,
        batterHand,
        hasPressureSkill,
        name,
        teamName,
      }

      return F.post(url, data, null)
        .then(res => res.json())
        .then(res => {
          const {ok, body, statusCode, gkdErrMsg, message} = res

          if (ok) {
            const {mainBatterArr, subBatterArr} = body
            if (!mainBatterArr || !subBatterArr) {
              return {isSuccess: false, errMsg: `Some arr is falsy. main:${mainBatterArr}, sub: ${subBatterArr}`} as LT.APIReturnType
            }
            return {isSuccess: true, mainBatterArr, subBatterArr} as LT.APIReturnType
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
    },
    []
  )

  // prettier-ignore
  const value: ContextType = {
    addBatter
  }
  return <BatterCallbacksContext.Provider value={value}>{children}</BatterCallbacksContext.Provider>
}
