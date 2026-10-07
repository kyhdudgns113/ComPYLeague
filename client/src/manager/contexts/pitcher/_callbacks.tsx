import {createContext, useCallback, useContext} from 'react'

import type {FC, PropsWithChildren} from 'react'

import * as CT from '@commonType'
import * as F from '@fetch'
import * as HTTP from '@httpType'
import * as LT from '@localType'
import * as OT from '@objectType'
import * as U from '@util'

// prettier-ignore
type ContextType = {
  getPitcherArr: (teamName: CT.Type_Team) => Promise<LT.APIReturnType>

  addPitcher: (name: string, pitcherType: CT.Type_Pitcher, teamName: CT.Type_Team) => Promise<LT.APIReturnType>

  movePitcherInArr: (movePitcher: OT.PitcherType, targetTeamName: CT.Type_Team, targetIdx: number) => Promise<LT.APIReturnType>
}
// prettier-ignore
export const PitcherCallbacksContext = createContext<ContextType>({
  getPitcherArr: () => Promise.resolve({isSuccess: false}),

  addPitcher: () => Promise.resolve({isSuccess: false}),

  movePitcherInArr: () => Promise.resolve({isSuccess: false}),

})

export const usePitcherCallbacksContext = () => useContext(PitcherCallbacksContext)

export const PitcherCallbacksProvider: FC<PropsWithChildren> = ({children}) => {
  // GET AREA:

  const getPitcherArr = useCallback(async (teamName: CT.Type_Team) => {
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

  // POST AREA:

  const addPitcher = useCallback(async (name: string, pitcherType: CT.Type_Pitcher, teamName: CT.Type_Team) => {
    const url = `/setting/addPitcher`
    const data: HTTP.HTTP_AddPitcher = {
      name,
      pitcherType,
      teamName,
    }
    return F.post(url, data, null)
      .then(res => res.json())
      .then(res => {
        const {ok, body, statusCode, gkdErrMsg, message} = res
        if (ok) {
          const {pitcherArr} = body
          if (!pitcherArr) {
            return {isSuccess: false, errMsg: 'pitcherArr is falsy'} as LT.APIReturnType
          }
          return {isSuccess: true, pitcherArr, pitcherType} as LT.APIReturnType
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

  // PUT AREA:

  const movePitcherInArr = useCallback(async (movePitcher: OT.PitcherType, targetTeamName: CT.Type_Team, targetIdx: number) => {
    const url = `/setting/movePitcherInArr`
    const data: HTTP.HTTP_MovePitcherInArr = {
      pitcherOId: movePitcher.pitcherOId,
      pitcherTeamName: movePitcher.teamName,

      targetIdx,
      targetTeamName: targetTeamName,
    }
    return F.put(url, data, null)
      .then(res => res.json())
      .then(res => {
        const {ok, body, statusCode, gkdErrMsg, message} = res

        if (ok) {
          const {CPArr, RPArr, SPArr} = body
          if (!CPArr || !RPArr || !SPArr) {
            return {isSuccess: false, errMsg: `Some arr is falsy. CP:${CPArr}, RP: ${RPArr}, SP: ${SPArr}`} as LT.APIReturnType
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
    //
  }, [])

  // prettier-ignore
  const value: ContextType = {
    getPitcherArr,

    addPitcher,

    movePitcherInArr
  }
  return <PitcherCallbacksContext.Provider value={value}>{children}</PitcherCallbacksContext.Provider>
}
