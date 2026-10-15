import {createSlice} from '@reduxjs/toolkit'

import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line

import * as LT from '@localType'

interface BaseState {
  leagueNum: LT.LeagueNumType
  pageTeamName: LT.PageTeamType
}

const initialState: BaseState = {
  leagueNum: 0,
  pageTeamName: ''
}

export const BaseSlice = createSlice({
  name: 'base',
  initialState,
  reducers: {
    setLeagueNum: (state, action: PayloadAction<number>) => {
      state.leagueNum = action.payload
    },
    setPageTeamName: (state, action: PayloadAction<LT.PageTeamType>) => {
      state.pageTeamName = action.payload
    }
  }
})