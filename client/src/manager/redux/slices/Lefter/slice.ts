import {createSlice} from '@reduxjs/toolkit'

// import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line
import type { LefterTabType } from '@localType'

interface LefterState {
  isShow: boolean
  tabType: LefterTabType
}

const initialState: LefterState = {
  isShow: true,
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
    },

    showOffLefter: state => {
      state.isShow = false
    },
    showOnLefter: state => {
      state.isShow = true
    }
  }
})