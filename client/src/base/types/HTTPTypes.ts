import * as CT from '@commonType'

export type HTTP_AddPitcher = {
  name: string
  pitcherType: CT.Type_Pitcher
  teamName: CT.Type_Team
}

export type HTTP_MovePitcherInArr = {
  pitcherOId: string
  pitcherTeamName: CT.Type_Team

  targetIdx: number
  targetTeamName: CT.Type_Team
}