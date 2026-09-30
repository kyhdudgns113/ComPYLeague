import {useAppSelector, useAppDispatch} from '@redux'
import {lefterSlice} from './slice'

export const useLefterStates = () => useAppSelector(state => state.lefter)

export const useLefterActions = () => {
  const dispatch = useAppDispatch()

  return {
    
    setLefterTabNull: () => dispatch(lefterSlice.actions.setLefterTabNull()),
    setLefterTabSetting: () => dispatch(lefterSlice.actions.setLefterTabSetting()),
    setLefterTabPitchRecord: () => dispatch(lefterSlice.actions.setLefterTabPitchRecord()),

    showOffLefter: () => dispatch(lefterSlice.actions.showOffLefter()),
    showOnLefter: () => dispatch(lefterSlice.actions.showOnLefter()),
  }
}

export const useSelectLefterType = () => useAppSelector(state => state.lefter.tabType)
export const useSelectLefterIsShow = () => useAppSelector(state => state.lefter.isShow)

