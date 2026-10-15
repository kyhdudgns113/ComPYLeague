import {createSlice} from '@reduxjs/toolkit'

import * as CT from '@commonType'
import * as LT from '@localType'

import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line

interface ModalState {
  modalBatterClass: LT.ModalBatterClassType,
  modalBatterTeamIdx: LT.ModalBatterTeamIdxType,
  modalLeagueNum: number | null
  modalPitcherType: LT.ModalPitcherType,
  modalType: LT.ModalType
}

const initialState: ModalState = {
  modalBatterClass: null,
  modalBatterTeamIdx: null,
  modalLeagueNum: null,
  modalPitcherType: null,
  modalType: null,
}

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    resetModalType: state => {
      state.modalBatterClass = null
      state.modalBatterTeamIdx = null
      state.modalLeagueNum = null
      state.modalPitcherType = null
      state.modalType = null
    },

    setModalTypeAddBatter: (state, action: PayloadAction<{batterClass: CT.Type_BatterClass, teamIdx: number}>) => {
      state.modalBatterClass = action.payload.batterClass
      state.modalBatterTeamIdx = action.payload.teamIdx
      state.modalLeagueNum = null
      state.modalType = "AddBatter"
      state.modalPitcherType = null
    },
    setModalLeagueNum: (state, action: PayloadAction<{leagueNum: number | null}>) => {
      state.modalBatterClass = null
      state.modalBatterTeamIdx = null
      state.modalLeagueNum = action.payload.leagueNum
      state.modalType = "AddGame"
      state.modalPitcherType = null
    },
    setModalTypeAddPitcher: (state, action: PayloadAction<CT.Type_Pitcher>) => {
      const pitcherType = action.payload

      state.modalBatterClass = null
      state.modalBatterTeamIdx = null
      state.modalLeagueNum = null
      state.modalType = "AddPitcher"
      state.modalPitcherType = pitcherType
    }
  }
})