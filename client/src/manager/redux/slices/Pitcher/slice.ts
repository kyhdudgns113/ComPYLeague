import {createSlice} from '@reduxjs/toolkit'

import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line

import * as OT from '@objectType'
import * as V from '@value'

interface PitcherState {
  CPMatrix: OT.PitcherType[][],
  movedPitcher: OT.PitcherType,
  RPMatrix: OT.PitcherType[][],
  SPMatrix: OT.PitcherType[][],
}

const initialState: PitcherState = {
  CPMatrix: Array.from({length: V.TEAM_IDX_ARR.length}, () => []),
  movedPitcher: V.NULL_PITCHER_OBJ(),
  RPMatrix: Array.from({length: V.TEAM_IDX_ARR.length}, () => []),
  SPMatrix: Array.from({length: V.TEAM_IDX_ARR.length}, () => []),
}

export const PitcherSlice = createSlice({
  name: 'pitcher',
  initialState,
  reducers: {
    resetMovedPitcher: state => {
      state.movedPitcher = V.NULL_PITCHER_OBJ()
    },

    setPitcherArr: (state, action: PayloadAction<{arrIdx: number, newArr: OT.PitcherType[], teamIdx: number}>) => {
      const {arrIdx, newArr, teamIdx} = action.payload

      if (0 <= teamIdx && teamIdx < V.TEAM_IDX_ARR.length && 0 <= arrIdx && arrIdx <= 2) {
        switch (arrIdx) {
          case 0:
            state.CPMatrix[teamIdx] = newArr
            break
          case 1:
            state.RPMatrix[teamIdx] = newArr
            break
          case 2:
            state.SPMatrix[teamIdx] = newArr
            break
          default:
            break
        }
      }
    },
    setPitcherMatrix: (state, action: PayloadAction<{matrixIdx: number, newMatrix: OT.PitcherType[][]}>) => {
      const {matrixIdx, newMatrix} = action.payload

      if (0 <= matrixIdx && matrixIdx <= 2) {
        switch (matrixIdx) {
          case 0:
            state.CPMatrix = newMatrix
            break
          case 1:
            state.RPMatrix = newMatrix
            break
          case 2:
            state.SPMatrix = newMatrix
            break
          default:
            break
        }
      }
    },
    
    setMovedPitcher: (state, action: PayloadAction<OT.PitcherType>) => {
      state.movedPitcher = action.payload
    },

    setCPMatrix: (state, action: PayloadAction<OT.PitcherType[][]>) => {
      state.CPMatrix = action.payload
    },
    setRPMatrix: (state, action: PayloadAction<OT.PitcherType[][]>) => {
      state.RPMatrix = action.payload
    },
    setSPMatrix: (state, action: PayloadAction<OT.PitcherType[][]>) => {
      state.SPMatrix = action.payload
    },

  }
})