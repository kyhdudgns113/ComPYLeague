import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {RecordDBService} from './recordDB.service'
import { GameInfo, GameInfoSchema } from './recordDB.entity'

@Module({
  imports: [MongooseModule.forFeature([{name: GameInfo.name, schema: GameInfoSchema}])],
  providers: [RecordDBService],
  exports: [RecordDBService],
})
export class RecordDBModule {}
