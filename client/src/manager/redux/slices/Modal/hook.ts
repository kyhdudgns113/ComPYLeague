import {useAppSelector, useAppDispatch} from '@redux'
import {ModalSlice} from './slice'

import * as CT from '@commonType'

export const useModalStates = () => useAppSelector(state => state.lefter)

export const useModalActions = () => {
  const dispatch = useAppDispatch()

  return {
    resetModalType: () => dispatch(ModalSlice.actions.resetModalType()),
    setModalTypeAddPitcher: (pitcherType: CT.Type_Pitcher) => dispatch(ModalSlice.actions.setModalTypeAddPitcher(pitcherType))
  }
}

export const useModalType = () => useAppSelector(state => state.modal.modalType)
export const useModalPitcherType = () => useAppSelector(state => state.modal.modalPitcherType)

