import {useAppSelector, useAppDispatch} from '@redux'
import {PitcherSlice} from './slice'

import * as OT from '@objectType'

const ARR_CP = 0
const ARR_RP = 1
const ARR_SP = 2

export const usePitcherStates = () => useAppSelector(state => state.pitcher)

export const usePitcherActions = () => {
  const dispatch = useAppDispatch()

  return {
    clearMovedPitcher: () => dispatch(PitcherSlice.actions.resetMovedPitcher()),

    selectMovedPitcher: (movedPitcher: OT.PitcherType) => dispatch(PitcherSlice.actions.setMovedPitcher(movedPitcher)),

    setCPArr: (newArr: OT.PitcherType[], teamIdx: number) => dispatch(PitcherSlice.actions.setPitcherArr({arrIdx: ARR_CP, newArr, teamIdx})),
    setRPArr: (newArr: OT.PitcherType[], teamIdx: number) => dispatch(PitcherSlice.actions.setPitcherArr({arrIdx: ARR_RP, newArr, teamIdx})),
    setSPArr: (newArr: OT.PitcherType[], teamIdx: number) => dispatch(PitcherSlice.actions.setPitcherArr({arrIdx: ARR_SP, newArr, teamIdx})),

    setCPMatrix: (newMatrix: OT.PitcherType[][]) => dispatch(PitcherSlice.actions.setCPMatrix(newMatrix)),
    setRPMatrix: (newMatrix: OT.PitcherType[][]) => dispatch(PitcherSlice.actions.setRPMatrix(newMatrix)),
    setSPMatrix: (newMatrix: OT.PitcherType[][]) => dispatch(PitcherSlice.actions.setSPMatrix(newMatrix))
  }
}

// export const usePitcherCount = () => useAppSelector(state => state.pitcher.count)
export const usePitcherCPArr = (teamIdx: number) => useAppSelector(state => state.pitcher.CPMatrix[teamIdx])
export const usePitcherRPArr = (teamIdx: number) => useAppSelector(state => state.pitcher.RPMatrix[teamIdx])
export const usePitcherSPArr = (teamIdx: number) => useAppSelector(state => state.pitcher.SPMatrix[teamIdx])

