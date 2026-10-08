import * as CT from './CommonTypes'

export type DTO_CreateBatter = {
  batterClass: CT.Type_BatterClass
  batterHand: CT.Type_BatterHand
  hasPressureSkill: boolean
  name: string
  teamName: CT.Type_Team
}

export type DTO_CreatePitcher = {
  name: string
  pitcherType: CT.Type_Pitcher
  teamName: CT.Type_Team
}

export type DTO_UpdatebatterArr = {
  batterOIdArr: string[]
  batterClass: CT.Type_BatterClass
  teamName: CT.Type_Team
}

export type DTO_UpdatePitcherArr = {
  pitcherOIdArr: string[]
  pitcherType: CT.Type_Pitcher
  teamName: CT.Type_Team
}
