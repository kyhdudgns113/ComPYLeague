import {createSlice} from '@reduxjs/toolkit'

import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line

import * as LT from '@localType'
import * as OT from '@objectType'

interface RecordState {
  gameArr: OT.GameInfoType[]
  gameNum: LT.GameNumType
  leagueNum: LT.LeagueNumType
}

const initialState: RecordState = {
  gameArr: [],
  gameNum: null,
  leagueNum: 1
}

export const RecordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {
    setGameArr: (state, action: PayloadAction<OT.GameInfoType[]>) => {
      state.gameArr = action.payload
    },
    setGameNum: (state, action: PayloadAction<LT.GameNumType>) => {
      const gameNum = action.payload
      if (gameNum !== null && (gameNum <= 0 || gameNum > 144)) {
        alert(`[RecordSlice] gameNum 이 이상합니다. ${gameNum}`)
        state.gameNum = null
      } // ::
      else {
        state.gameNum = gameNum
      }
    },
    setLeagueNum: (state, action: PayloadAction<LT.LeagueNumType>) => {
      const leagueNum = action.payload
      if (leagueNum !== null && leagueNum < 0) {
        alert(`[RecordSlice] leagueNum 이 이상합니다. ${leagueNum}`)
        state.leagueNum = null
      } // ::
      else {
        state.leagueNum = leagueNum
      }
    }
  }
})