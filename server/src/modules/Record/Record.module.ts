import {Module} from '@nestjs/common'
import {RecordController} from './Record.controller'
import {RecordService} from './Record.service'

@Module({
  imports: [],
  controllers: [RecordController],
  providers: [RecordService],
  exports: [RecordService],
})
export class RecordModule {}
