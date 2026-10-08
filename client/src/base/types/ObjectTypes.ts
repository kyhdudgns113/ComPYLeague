import * as CT from '@commonType'

export type BatterType = {
  name: string
  batterNum: number // 타순
  batterClass: CT.Type_BatterClass
  batterHand: CT.Type_BatterHand
  batterOId: string // uniqueId, ObjectId

  hasPressureSkill: boolean // 위압감 여부
  teamName: CT.Type_Team
}

export type PitcherType = {
  name: string
  pitcherOId: string // uniqueId, ObjectId
  pitcherType: CT.Type_Pitcher
  teamName: CT.Type_Team
}