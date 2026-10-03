import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose'

@Schema()
export class PitcherInfo extends Document {
  /** Object Id is in extended class Document */

  /** User ID. Not ObjectId */
  @Prop({type: String, unique: true})
  name: string
}

export const PitcherInfoSchema = SchemaFactory.createForClass(PitcherInfo)
