import * as CT from '@commonType'

export type HTTP_AddBatter = {
  batterClass: CT.Type_BatterClass,
  batterHand: CT.Type_BatterHand,
  batterNum: number
  hasPressureSkill: boolean,
  name: string,
  teamName: CT.Type_Team
}

export type HTTP_AddPitcher = {
  name: string
  pitcherType: CT.Type_Pitcher
  teamName: CT.Type_Team
}

export type HTTP_MovePitcherInArr = {
  pitcherOId: string
  pitcherType: CT.Type_Pitcher

  targetIdx: number
  targetPitcherType: CT.Type_Pitcher

  teamName: CT.Type_Team
}
