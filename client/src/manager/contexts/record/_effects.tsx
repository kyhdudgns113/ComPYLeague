import {createContext, useContext, useEffect} from 'react'

import {useRecordActions} from '@redux'

import {useRecordCallbacksContext} from './_callbacks'

import type {FC, PropsWithChildren} from 'react'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const RecordEffectsContext = createContext<ContextType>({})

export const useRecordEffectsContext = () => useContext(RecordEffectsContext)

export const RecordEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  const {readGameMatrix} = useRecordCallbacksContext()
  const {setGameMatrix, setLeagueArr} = useRecordActions()

  // 불러오기: gameMatrix, leagueArr
  useEffect(() => {
    readGameMatrix().then(res => {
      const {isSuccess} = res
      if (isSuccess) {
        const {gameMatrix, leagueArr} = res
        setGameMatrix(gameMatrix)
        setLeagueArr(leagueArr)
      }
    })
  }, [])
  //
  return <RecordEffectsContext.Provider value={{}}>{children}</RecordEffectsContext.Provider>
}
