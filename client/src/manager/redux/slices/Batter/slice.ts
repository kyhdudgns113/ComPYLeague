import {createSlice} from '@reduxjs/toolkit'

import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line

import * as OT from '@objectType'
import * as V from '@value'

interface BatterState {
  mainBatterMatrix: OT.BatterType[][],
  subBatterMatrix: OT.BatterType[][],
}

const initialState: BatterState = {
  mainBatterMatrix: Array.from({length: V.TEAM_IDX_ARR.length}, () => []),
  subBatterMatrix: Array.from({length: V.TEAM_IDX_ARR.length}, () => [])
}

export const BatterSlice = createSlice({
  name: 'batter',
  initialState,
  reducers: {
    setMainArr: (state, action: PayloadAction<{teamIdx: number, newArr: OT.BatterType[]}>) => {
      const {teamIdx, newArr} = action.payload
      if (0 <= teamIdx && teamIdx < V.TEAM_IDX_ARR.length) {
        state.mainBatterMatrix[teamIdx] = newArr
      }
    },
    setMainMatrix: (state, action: PayloadAction<OT.BatterType[][]>) => {
      state.mainBatterMatrix = action.payload
    },
    setSubArr: (state, action: PayloadAction<{teamIdx: number, newArr: OT.BatterType[]}>) => {
      const {teamIdx, newArr} = action.payload
      if (0 <= teamIdx && teamIdx < V.TEAM_IDX_ARR.length) {
        state.subBatterMatrix[teamIdx] = newArr
      }
    },
    setSubMatrix: (state, action: PayloadAction<OT.BatterType[][]>) => {
      state.subBatterMatrix = action.payload
    },
  }
})