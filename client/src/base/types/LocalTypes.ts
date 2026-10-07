import * as CT from '@commonType'

import type {Dispatch, SetStateAction} from 'react'

export type APIReturnType = {
  isSuccess: boolean
  [key: string]: any
}

export type LefterTabType = "Setting" | "PitchRecord" | null
export type ModalType = "AddPitcher" | null // 투수 관련 작업 안하는데 투수타입이 설정되는걸 방지
export type ModalPitcherType = CT.Type_Pitcher | null

export type Setter<T> = Dispatch<SetStateAction<T>>
