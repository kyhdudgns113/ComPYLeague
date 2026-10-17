import {useAppSelector, useAppDispatch} from '@redux'
import {RecordSlice} from './slice'

import * as OT from '@objectType'

export const useRecordStates = () => useAppSelector(state => state.record)

export const useRecordActions = () => {
  const dispatch = useAppDispatch()

  return {
    addGame: (gameRow: OT.GameInfoType, leagueNum: number) => dispatch(RecordSlice.actions.addGameRow({gameRow, leagueNum})),
    
    clearGameNum: () => dispatch(RecordSlice.actions.setGameNum(null)),

    resetLeagueNum: () => dispatch(RecordSlice.actions.setLeagueNum(null)),

    setGameArr: (gameArr: OT.GameInfoType[], leagueNum: number) => dispatch(RecordSlice.actions.setGameArr({gameArr, leagueNum})),
    setGameMatrix: (gameMatrix: OT.GameInfoType[][]) => dispatch(RecordSlice.actions.setGameMatrix(gameMatrix)),
    setGameNum: (gameNum: number) => dispatch(RecordSlice.actions.setGameNum(gameNum)),

    setLeagueArr: (leagueArr: OT.LeagueInfoType[]) => dispatch(RecordSlice.actions.setLeagueArr(leagueArr)),
    setLeagueNum: (leagueNum: number) => dispatch(RecordSlice.actions.setLeagueNum(leagueNum)),
  }
}

