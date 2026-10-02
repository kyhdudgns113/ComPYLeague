import {Body, Controller, Get, Headers, Param, Post} from '@nestjs/common'
import {SettingService} from './Setting.service'

@Controller('setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  @Get('/copyGet/:testArg')
  async copyGet(@Headers() headers: any, @Param('testArg') testArg: any) {
    const {jwtFromHeader} = headers
    const {ok, body, errObj} = await this.settingService.copyMeGet(testArg)
    return {ok, body, errObj, jwtFromHeader}
  }
}
