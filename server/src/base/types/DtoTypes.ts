import * as CT from './CommonTypes'

export type DTO_CreatePitcher = {
  name: string
  pitcherType: CT.Type_Pitcher
  teamName: CT.Type_Team
}

export type DTO_UpdatePitcherArr = {
  pitcherOIdArr: string[]
  pitcherType: CT.Type_Pitcher
  teamName: CT.Type_Team
}
