import {createSlice} from '@reduxjs/toolkit'

import * as CT from '@commonType'
import * as LT from '@localType'

import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line

interface ModalState {
  modalType: LT.ModalType
  modalPitcherType: LT.ModalPitcherType
}

const initialState: ModalState = {
  modalType: null,
  modalPitcherType: null
}

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    resetModalType: state => {
      state.modalType = null
      state.modalPitcherType = null
    },

    setModalTypeAddPitcher: (state, action: PayloadAction<CT.Type_Pitcher>) => {
      const pitcherType = action.payload

      state.modalType = "AddPitcher"
      state.modalPitcherType = pitcherType
    }
  }
})