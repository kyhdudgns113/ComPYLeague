import {useAppSelector, useAppDispatch} from '@redux'
import {RecordSlice} from './slice'


export const useRecordStates = () => useAppSelector(state => state.lefter)

export const useRecordActions = () => {
  const dispatch = useAppDispatch()

  return {
    clearGameNum: () => dispatch(RecordSlice.actions.setGameNum(null)),
    clearLeagueNum: () => dispatch(RecordSlice.actions.setLeagueNum(null)),

    setGameNum: (gameNum: number) => dispatch(RecordSlice.actions.setGameNum(gameNum)),
    setLeagueNum: (leagueNum: number) => dispatch(RecordSlice.actions.setLeagueNum(leagueNum)),
  }
}

