import {Module} from '@nestjs/common'
import {BatterDBModule, PitcherDBModule, RecordDBModule} from './schemas'

@Module({
  imports: [
    BatterDBModule,
    RecordDBModule,
    PitcherDBModule
  ],
  controllers: [],
  providers: [],
  exports: [
    BatterDBModule,
    RecordDBModule,
    PitcherDBModule
  ],
})
export class DatabaseModule {}
