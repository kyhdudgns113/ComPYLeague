import {Module} from '@nestjs/common'
import {MongooseModule} from '@nestjs/mongoose'
import {BatterInfo, BatterInfoSchema} from './batterDB.entity'
import {BatterDBService} from './batterDB.service'

@Module({
  imports: [MongooseModule.forFeature([{name: BatterInfo.name, schema: BatterInfoSchema}])],
  providers: [BatterDBService],
  exports: [BatterDBService],
})
export class BatterDBModule {}
