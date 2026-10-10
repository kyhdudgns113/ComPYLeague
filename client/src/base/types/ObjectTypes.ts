import * as CT from '@commonType'

export type BatterType = {
  batterClass: CT.Type_BatterClass
  batterHand: CT.Type_BatterHand
  batterOId: string // uniqueId, ObjectId

  hasPressureSkill: boolean // 위압감 여부
  
  name: string

  teamName: CT.Type_Team
}

export type GameInfoType = {
  enemyTeam: CT.Type_Team
  gameNum: number
  leagueNum: number
  SPName: string
}

export type PitcherType = {
  name: string
  pitcherOId: string // uniqueId, ObjectId
  pitcherType: CT.Type_Pitcher
  teamName: CT.Type_Team
}