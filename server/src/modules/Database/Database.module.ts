import {Module} from '@nestjs/common'
import {DatabaseController} from './Database.controller'
import {DatabaseService} from './Database.service'

@Module({
  imports: [],
  controllers: [DatabaseController],
  providers: [DatabaseService],
  exports: [DatabaseService]
})
export class DatabaseModule {}
