import {Body, Controller, Get, Headers, Param, Post} from '@nestjs/common'
import {SettingService} from './Setting.service'

import * as CT from '@commonType'

@Controller('/setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}


  @Get('/readTeamPitcherArr/:teamName')
  async readTeamPitcherArr(@Param('teamName') teamName: CT.Type_Team) {
    const {ok, body, gkdErrMsg, statusCode} = await this.settingService.readTeamPitcherArr(teamName)
    return {ok, body, gkdErrMsg, statusCode}

  }
}
