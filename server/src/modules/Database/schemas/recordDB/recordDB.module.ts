import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {RecordDBService} from './recordDB.service'
import { GameInfo, GameInfoSchema, LeagueInfo, LeagueInfoSchema } from './recordDB.entity'

@Module({
  imports: [
    MongooseModule.forFeature([{name: GameInfo.name, schema: GameInfoSchema}]),
    MongooseModule.forFeature([{name: LeagueInfo.name, schema: LeagueInfoSchema}])
  ],
  providers: [RecordDBService],
  exports: [RecordDBService],
})
export class RecordDBModule {}
