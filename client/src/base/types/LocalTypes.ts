import * as CT from '@commonType'

import type {Dispatch, SetStateAction} from 'react'

export type APIReturnType = {
  isSuccess: boolean
  [key: string]: any
}

export type LefterTabType = "Setting" | "PitchRecord" | null
export type ModalType = "AddPitcher" | null
export type ModalPitcherType = CT.Type_Pitcher | null

export type Setter<T> = Dispatch<SetStateAction<T>>
