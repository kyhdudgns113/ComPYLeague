import type {Dispatch, SetStateAction} from 'react'

export type APIReturnType = {
  isSuccess: boolean
  [key: string]: any
}

export type LefterTabType = "Setting" | "PitchRecord" | null

export type Setter<T> = Dispatch<SetStateAction<T>>
