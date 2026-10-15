import {useAppSelector, useAppDispatch} from '@redux'
import {RecordSlice} from './slice'

import * as OT from '@objectType'

export const useRecordStates = () => useAppSelector(state => state.record)

export const useRecordActions = () => {
  const dispatch = useAppDispatch()

  return {
    addGame: (gameElem: OT.GameInfoType) => dispatch(RecordSlice.actions.addGameRow(gameElem)),
    
    clearGameNum: () => dispatch(RecordSlice.actions.setGameNum(null)),
    clearLeagueNum: () => dispatch(RecordSlice.actions.setLeagueNum(null)),

    setGameArr: (gameArr: OT.GameInfoType[]) => dispatch(RecordSlice.actions.setGameArr(gameArr)),
    setGameNum: (gameNum: number) => dispatch(RecordSlice.actions.setGameNum(gameNum)),
    setLeagueNum: (leagueNum: number) => dispatch(RecordSlice.actions.setLeagueNum(leagueNum)),
  }
}

