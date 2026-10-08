import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

import * as CT from '@commonType'
import * as OT from '@objectTye'

@Schema()
export class BatterInfo extends Document {
  /** Object Id is in extended class Document */

  /** User ID. Not ObjectId */
  @Prop({type: String, required: true})
  name!: string

  // 타순을 넣는다. 1번부터 시작이다
  @Prop({type: Number, required: true})
  batterNum!: number
  
  // 선발, 후보
  @Prop({type: String, required: true})
  batterClass!: CT.Type_BatterClass

  // 좌타, 우타, 양타
  @Prop({type: String, required: true})
  batterHand!: CT.Type_BatterHand

  @Prop({type: Boolean, default: false})
  hasPressureSkill: boolean = false

  @Prop({type: String, required: true})
  teamName!: CT.Type_Team
}

@Schema()
export class BatterArr extends Document {
  @Prop({type: String, required: true})
  teamName!: CT.Type_Team
}

export const BatterInfoSchema = SchemaFactory.createForClass(BatterInfo)

BatterInfoSchema.index({batterNum: 1, teamName: 1}, {unique: true})
BatterInfoSchema.index({name: 1, teamName: 1}, {unique: true})
