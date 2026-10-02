import {Module} from '@nestjs/common'
import {SettingController} from './Setting.controller'
import {SettingService} from './Setting.service'

@Module({
  imports: [],
  controllers: [SettingController],
  providers: [SettingService],
  exports: [SettingService]
})
export class SettingModule {}
