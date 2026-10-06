import type {Dispatch, SetStateAction} from 'react'

export type LefterTabType = "Setting" | "PitchRecord" | null

export type Setter<T> = Dispatch<SetStateAction<T>>
