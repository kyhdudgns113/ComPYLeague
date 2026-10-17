import {createContext, useCallback, useContext} from 'react'

import type {FC, PropsWithChildren} from 'react'

import * as CT from '@commonType'
import * as F from '@fetch'
import * as HTTP from '@httpType'
import * as LT from '@localType'
import * as U from '@util'

// prettier-ignore
type ContextType = {
  readGameMatrix: () => Promise<LT.APIReturnType>,

  addGame: (arrLen: number, leagueNum: number, SPName: string, teamName: CT.Type_Team) => Promise<LT.APIReturnType>
}
// prettier-ignore
export const RecordCallbacksContext = createContext<ContextType>({
  readGameMatrix: () => Promise.resolve({isSuccess: false, errMsg: 'readGameArr is not initialized!!'}),

  addGame: () => Promise.resolve({isSuccess: false, errMsg: 'addGame is not initialized!!'})  
})

export const useRecordCallbacksContext = () => useContext(RecordCallbacksContext)

export const RecordCallbacksProvider: FC<PropsWithChildren> = ({children}) => {
  // GET AREA:
  const readGameMatrix = useCallback(async () => {
    /**
     * 게임 행렬과 리그 목록을 한번에 불러온다.
     */
    const url = `/record/readGameMatrix`
    return F.get(url, null)
      .then(res => res.json())
      .then(res => {
        const {ok, body, statusCode, gkdErrMsg, message} = res

        if (ok) {
          const {gameMatrix, leagueArr} = body

          if (!leagueArr || !gameMatrix) {
            return {isSuccess: false, errMsg: `Some arr is falsy.\ngameMatrix: ${gameMatrix}\nleagueArr: ${leagueArr}`} as LT.APIReturnType
          }

          return {isSuccess: true, gameMatrix, leagueArr} as LT.APIReturnType
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
  const addGame = useCallback(async (arrLen: number, leagueNum: number, SPName: string, teamName: CT.Type_Team) => {
    const url = '/record/addGame'

    // arrLen 이 0이면 서버에서 1번째 게임을 만든다
    const data: HTTP.HTTP_AddGame = {
      arrLen,
      leagueNum,
      SPName,
      teamName,
    }

    return F.post(url, data, null)
      .then(res => res.json())
      .then(res => {
        const {ok, body, statusCode, gkdErrMsg, message} = res

        if (ok) {
          const {gameArr} = body

          if (!gameArr) {
            return {isSuccess: false, errMsg: 'gameArr is falsy'} as LT.APIReturnType
          }

          return {isSuccess: true, gameArr} as LT.APIReturnType
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
    readGameMatrix,
    
    addGame
  }
  return <RecordCallbacksContext.Provider value={value}>{children}</RecordCallbacksContext.Provider>
}
