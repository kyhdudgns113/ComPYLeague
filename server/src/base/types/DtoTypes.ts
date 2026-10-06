import * as CT from './CommonTypes'

export type DTO_CreatePitcher = {
  name: string
  teamName: CT.Type_Team
}

export type DTO_UpdatePitcherArr = {
  pitcherOIdArr: string[]
  teamName: CT.Type_Team
}