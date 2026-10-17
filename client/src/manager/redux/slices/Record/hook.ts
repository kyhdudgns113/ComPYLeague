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

// export const usePitcherCPArr = (teamIdx: number) => useAppSelector(state => state.record.CPMatrix[teamIdx])


export const useGameArr = (leagueNum: number) => {
  const {gameMatrix, leagueArr} = useAppSelector(state => state.record)

  const isExist = leagueArr.filter(league => league.leagueNum === leagueNum).length > 0

  if (!isExist) {
    alert(`[RecordHook] [경고] leagueArr 에 ${leagueNum} 이 없어요`)
    return []
  }

  const gameArr = gameMatrix[leagueNum] || []

  return gameArr
}