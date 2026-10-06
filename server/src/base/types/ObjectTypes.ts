import * as CT from '@commonType'

export type PitcherType = {
  name: string
  pitcherOId: string // uniqueId, ObjectId
  pitcherType: CT.Type_Pitcher
  teamName: CT.Type_Team
}