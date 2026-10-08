import {Module} from '@nestjs/common'
import {BatterDBModule, PitcherDBModule} from './schemas'

@Module({
  imports: [
    BatterDBModule,
    PitcherDBModule
  ],
  controllers: [],
  providers: [],
  exports: [
    BatterDBModule,
    PitcherDBModule
  ],
})
export class DatabaseModule {}
