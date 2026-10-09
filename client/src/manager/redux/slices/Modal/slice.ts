import {createSlice} from '@reduxjs/toolkit'

import * as CT from '@commonType'
import * as LT from '@localType'

import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line

interface ModalState {
  modalBatterClass: LT.ModalBatterClassType,
  modalBatterTeam: LT.ModalBatterTeamType,
  modalType: LT.ModalType
  modalPitcherType: LT.ModalPitcherType
}

const initialState: ModalState = {
  modalBatterClass: null,
  modalBatterTeam: null,
  modalType: null,
  modalPitcherType: null
}

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    resetModalType: state => {
      state.modalBatterClass = null
      state.modalBatterTeam = null
      state.modalType = null
      state.modalPitcherType = null
    },

    setModalTypeAddBatter: (state, action: PayloadAction<{batterClass: CT.Type_BatterClass, teamName: CT.Type_Team}>) => {
      state.modalBatterClass = action.payload.batterClass
      state.modalBatterTeam = action.payload.teamName
      state.modalType = "AddBatter"
      state.modalPitcherType = null
    }, 
    setModalTypeAddPitcher: (state, action: PayloadAction<CT.Type_Pitcher>) => {
      const pitcherType = action.payload

      state.modalBatterClass = null
      state.modalBatterTeam = null
      state.modalType = "AddPitcher"
      state.modalPitcherType = pitcherType
    }
  }
})