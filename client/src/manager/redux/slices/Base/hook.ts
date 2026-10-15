import {useAppSelector, useAppDispatch} from '@redux'
import {BaseSlice} from './slice'

import * as CT from '@commonType'

export const useBaseStates = () => useAppSelector(state => state.base)

export const useBaseActions = () => {
  const dispatch = useAppDispatch()

  return {
    resetPageTeamName: () => dispatch(BaseSlice.actions.setPageTeamName('')),

    setLeagueNum: (leagueNum: number) => dispatch(BaseSlice.actions.setLeagueNum(leagueNum)),
    setPageTeamName: (teamName: CT.Type_Team) => dispatch(BaseSlice.actions.setPageTeamName(teamName))
  }
}
