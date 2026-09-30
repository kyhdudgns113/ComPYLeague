import {createSlice} from '@reduxjs/toolkit'

import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line
import type { LefterTabType } from '@type'

interface LefterState {
  tabType: LefterTabType
}

const initialState: LefterState = {
  tabType: null
}

export const lefterSlice = createSlice({
  name: 'lefter',
  initialState,
  reducers: {
    setLefterTabNull: state => {
      state.tabType = null
    },
    setLefterTabSetting: state => {
      state.tabType = "Setting"
    },
    setLefterTabPitchRecord: state => {
      state.tabType = "PitchRecord"
    }
  }
})