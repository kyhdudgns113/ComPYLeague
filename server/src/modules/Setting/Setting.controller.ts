import {Body, Controller, Get, Headers, Param, Post} from '@nestjs/common'
import {SettingService} from './Setting.service'

import * as CT from '@commonType'
import * as HTTP from '@httpType'

@Controller('/setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  // GET AREA:
  @Get('/readTeamPitcherArr/:teamName')
  async readTeamPitcherArr(@Param('teamName') teamName: CT.Type_Team) {
    const {ok, body, gkdErrMsg, statusCode} = await this.settingService.readTeamPitcherArr(teamName)
    return {ok, body, gkdErrMsg, statusCode}
  }

  // POST AREA:
  @Post(`/addPitcher`)
  async addPitcher(@Body() data: HTTP.HTTP_AddPitcher) {
    const {ok, body, gkdErrMsg, statusCode} = await this.settingService.addPitcher(data)
    return {ok, body, gkdErrMsg, statusCode} 
  }
}
