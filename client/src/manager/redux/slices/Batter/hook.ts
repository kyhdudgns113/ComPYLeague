import {useAppSelector, useAppDispatch} from '@redux'
import {BatterSlice} from './slice'

import * as OT from '@objectType'

export const useBatterStates = () => useAppSelector(state => state.batter)

export const useBatterActions = () => {
  const dispatch = useAppDispatch()

  return {
    setMainBatterArr: (teamIdx: number, newArr: OT.BatterType[]) => dispatch(BatterSlice.actions.setMainArr({teamIdx, newArr})),
    setMainBatterMatrix: (newMatrix: OT.BatterType[][]) => dispatch(BatterSlice.actions.setMainMatrix(newMatrix)),
    setSubBatterArr: (teamIdx: number, newArr: OT.BatterType[]) => dispatch(BatterSlice.actions.setSubArr({teamIdx, newArr})),
    setSubBatterMatrix: (newMatrix: OT.BatterType[][]) => dispatch(BatterSlice.actions.setSubMatrix(newMatrix)),
  }
}

// export const useBatterCount = () => useAppSelector(state => state.batter.count)
export const useMainBatterArr = (teamIdx: number) => useAppSelector(state => state.batter.mainBatterMatrix[teamIdx])
export const useSubBatterArr = (teamIdx: number) => useAppSelector(state => state.batter.subBatterMatrix[teamIdx])