import {createSlice} from '@reduxjs/toolkit'

import * as CT from '@commonType'
import * as LT from '@localType'

import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line

interface ModalState {
  modalBatterClass: LT.ModalBatterClassType,
  modalBatterTeam: LT.ModalBatterTeamType,
  modalLeagueNum: number | null
  modalPitcherType: LT.ModalPitcherType,
  modalType: LT.ModalType
}

const initialState: ModalState = {
  modalBatterClass: null,
  modalBatterTeam: null,
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
      state.modalBatterTeam = null
      state.modalLeagueNum = null
      state.modalPitcherType = null
      state.modalType = null
    },

    setModalTypeAddBatter: (state, action: PayloadAction<{batterClass: CT.Type_BatterClass, teamName: CT.Type_Team}>) => {
      state.modalBatterClass = action.payload.batterClass
      state.modalBatterTeam = action.payload.teamName
      state.modalLeagueNum = null
      state.modalType = "AddBatter"
      state.modalPitcherType = null
    },
    setModalLeagueNum: (state, action: PayloadAction<{leagueNum: number | null}>) => {
      state.modalBatterClass = null
      state.modalBatterTeam = null
      state.modalLeagueNum = action.payload.leagueNum
      state.modalType = "AddGame"
      state.modalPitcherType = null
    },
    setModalTypeAddPitcher: (state, action: PayloadAction<CT.Type_Pitcher>) => {
      const pitcherType = action.payload

      state.modalBatterClass = null
      state.modalBatterTeam = null
      state.modalLeagueNum = null
      state.modalType = "AddPitcher"
      state.modalPitcherType = pitcherType
    }
  }
})