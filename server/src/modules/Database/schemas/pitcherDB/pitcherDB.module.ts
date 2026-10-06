import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {PitcherArr, PitcherArrSchema, PitcherInfo, PitcherInfoSchema, PitcherRecord, PitcherRecordSchema} from './pitcherDB.entity'
import {PitcherDBService} from './pitcherDB.service'

@Module({
  imports: [ // ::
    MongooseModule.forFeature([{name: PitcherArr.name, schema: PitcherArrSchema}]),
    MongooseModule.forFeature([{name: PitcherInfo.name, schema: PitcherInfoSchema}]),
    MongooseModule.forFeature([{name: PitcherRecord.name, schema: PitcherRecordSchema}])
  ],
  providers: [PitcherDBService],
  exports: [PitcherDBService],
})
export class PitcherDBModule {}
