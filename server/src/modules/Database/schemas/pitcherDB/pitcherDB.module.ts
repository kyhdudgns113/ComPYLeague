import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {PitcherInfo, PitcherInfoSchema} from './pitcherDB.entity'
import {PitcherDBService} from './pitcherDB.service'

@Module({
  imports: [MongooseModule.forFeature([{name: PitcherInfo.name, schema: PitcherInfoSchema}])],
  providers: [PitcherDBService],
  exports: [PitcherDBService],
})
export class ___CopyMeModule {}
