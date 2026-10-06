import {Module} from '@nestjs/common'
import { PitcherDBModule, PitcherDBService } from './schemas';

@Module({
  imports: [PitcherDBModule],
  controllers: [],
  providers: [],
  exports: [PitcherDBModule],
})
export class DatabaseModule {}
