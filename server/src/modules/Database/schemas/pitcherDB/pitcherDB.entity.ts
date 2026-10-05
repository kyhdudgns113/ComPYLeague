import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

import * as CT from '@commonType'
import * as V from '@value'


/**
 * class PitcherRecord
 * 
 * - 투수 1명의 한 타석의 기록이다.
 */
@Schema()
export class PitcherRecord extends Document {

  @Prop({type: String, required: true})
  pitcherOId!: string

  @Prop({type: [String], default: []})
  pitchArr: string[] = []

  @Prop({type: String, required: true})
  result: CT.Type_Result = null

  @Prop({type: Number, required: true})
  game!: number

  // 상대팀 이름
  @Prop({type: String, required: true})
  enemyTeam!: CT.Type_Team

  // 상대타자 이름. 연도도 표기
  @Prop({type: String, required: true})
  enemyName!: string

  // 몇 회인지
  @Prop({type: Number, required: true})
  inning: number = 0

  // 몇 번째 타석인지
  @Prop({type: Number, required: true})
  plateAppearance = 0
}

@Schema()
export class PitcherInfo extends Document {
  /** Object Id is in extended class Document */

  @Prop({type: String, required: true})
  name: string = ''

  @Prop({type: String, required: true})
  teamName: CT.Type_Team = V.MY_TEAM_NAME
}

export const PitcherInfoSchema = SchemaFactory.createForClass(PitcherInfo)
