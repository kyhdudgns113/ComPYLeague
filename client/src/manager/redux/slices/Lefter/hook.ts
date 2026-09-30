import {useAppSelector, useAppDispatch} from '@redux'
import {lefterSlice} from './slice'

export const useLefterStates = () => useAppSelector(state => state.directory)

export const useLefterActions = () => {
  const dispatch = useAppDispatch()

  return {
    
  }
}

export const useSelectLefter = (dirOId: string) => useAppSelector(state => state.directory.directories[dirOId])

