import {createSlice} from '@reduxjs/toolkit'

import type {PayloadAction} from '@reduxjs/toolkit' // eslint-disable-line

import * as LT from '@localType'
import * as OT from '@objectType'

interface RecordState {
  gameNum: LT.GameNumType
  gameMatrix: OT.GameInfoType[][]

  leagueArr: OT.LeagueInfoType[]
  leagueNum: LT.LeagueNumType

  recordArr: OT.RecordElementType[] // 일차원 배열로 넣고 9개씩 끊는다.
}

const initialState: RecordState = {
  gameNum: null,
  gameMatrix: [],

  leagueArr: [],
  leagueNum: null, // 1부터 시작한다

  recordArr: []
}

export const RecordSlice = createSlice({
  name: 'record',
  initialState,
  reducers: {
    addGameRow: (state, action: PayloadAction<{gameRow: OT.GameInfoType, leagueNum: number}>) => {
      /**
       * leagueNum 은 인자로 받아야만 한다.
       * - 리그 1 에 행을 추가하고 기다리는 중간에 리그 2로 바뀔때
       * - 새로운 행이 리그 2로 추가되는걸 방지
       */
      const {gameRow, leagueNum} = action.payload

      state.gameMatrix[leagueNum] = [gameRow, ...state.gameMatrix[leagueNum]]
    },
    addRecord: (state, action: PayloadAction<OT.RecordElementType>) => {
      state.recordArr.push(action.payload)
    },

    setGameArr: (state, action: PayloadAction<{gameArr: OT.GameInfoType[], leagueNum: number}>) => {
      const {gameArr, leagueNum} = action.payload

      state.gameMatrix[leagueNum] = gameArr
    },
    setGameMatrix: (state, action: PayloadAction<OT.GameInfoType[][]>) => {
      state.gameMatrix = action.payload
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
    
    setLeagueArr: (state, action: PayloadAction<OT.LeagueInfoType[]>) => {
      state.leagueArr = action.payload
    },
    setLeagueNum: (state, action: PayloadAction<LT.LeagueNumType>) => {
      const leagueNum = action.payload
      const leagueArr = state.leagueArr
      
      // 주의사항: leagueNum 은 1부터 시작한다. 가장 최근 leagueNum 은 leagueArr.length 이다.
      if (leagueNum !== null && (leagueNum <= 0 || leagueNum > leagueArr.length)) {
        /**
         * 이 경고문구 띄우면 괜히 번거로워지기만 한다
         */
        // alert(`[RecordSlice] leagueNum 이 이상합니다. ${leagueNum}`)
        state.leagueNum = null
      }
      state.leagueNum = leagueNum
    },

    setRecordArr: (state, action: PayloadAction<OT.RecordElementType[]>) => {
      state.recordArr = action.payload
    },

    updateRecordElem: (state, action: PayloadAction<{idx: number, record: OT.RecordElementType}>) => {
      const {idx, record} = action.payload

      if (idx >= state.recordArr.length) {
        alert(`[RecordSlice] 기록 배열의 길이에 비해 인덱스가 너무 커요.\narrLen:${state.recordArr.length}\nidx:${idx}`)
        return
      }
      state.recordArr[idx] = record
    }
  }
})