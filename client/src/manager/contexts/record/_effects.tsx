import {createContext, useContext, useEffect} from 'react'

import {useBaseStates, useRecordActions} from '@redux'

import {useRecordCallbacksContext} from './_callbacks'

import type {FC, PropsWithChildren} from 'react'

// prettier-ignore
type ContextType = {}
// prettier-ignore
export const RecordEffectsContext = createContext<ContextType>({})

export const useRecordEffectsContext = () => useContext(RecordEffectsContext)

export const RecordEffectsProvider: FC<PropsWithChildren> = ({children}) => {
  const {leagueNum} = useBaseStates()
  const {readGameArr} = useRecordCallbacksContext()
  const {setGameArr} = useRecordActions()

  // 불러오기: gameArr
  useEffect(() => {
    if (leagueNum !== null) {
      readGameArr(leagueNum).then(res => {
        const {isSuccess} = res
        if (isSuccess) {
          const {gameArr} = res
          setGameArr(gameArr)
        }
      })
    }
  }, [leagueNum])
  //
  return <RecordEffectsContext.Provider value={{}}>{children}</RecordEffectsContext.Provider>
}
