import {Body, Controller, Get, Headers, Param, Post, Put} from '@nestjs/common'
import {SettingService} from './Setting.service'

import * as CT from '@commonType'
import * as HTTP from '@httpType'

@Controller('/setting')
export class SettingController {
  constructor(private readonly settingService: SettingService) {}

  // GET AREA:
  @Get('/readBatterMatrixAll')
  async readBatterMatrixAll() {
    const {ok, body, gkdErrMsg, statusCode} = await this.settingService.readBatterMatrixAll()
    return {ok, body, gkdErrMsg, statusCode}
  }
  
  @Get('/readPitcherMatrixAll')
  async readPitcherMatrixAll() {
    const {ok, body, gkdErrMsg, statusCode} = await this.settingService.readPitcherMatrixAll()
    return {ok, body, gkdErrMsg, statusCode}
  }

  // POST AREA:
  @Post(`/addBatter`)
  async addBatter(@Body() data: HTTP.HTTP_AddBatter) {
    const {ok, body, gkdErrMsg, statusCode} = await this.settingService.addBatter(data)
    return {ok, body, gkdErrMsg, statusCode}
  }
  
  @Post(`/addPitcher`)
  async addPitcher(@Body() data: HTTP.HTTP_AddPitcher) {
    const {ok, body, gkdErrMsg, statusCode} = await this.settingService.addPitcher(data)
    return {ok, body, gkdErrMsg, statusCode}
  }

  // PUT AREA:
  @Put('movePitcherInArr')
  async movePitcherInArr(@Body() data: HTTP.HTTP_MovePitcherInArr) {
    const {ok, body, gkdErrMsg, statusCode} = await this.settingService.movePitcherInArr(data)
    return {ok, body, gkdErrMsg, statusCode}
  }
}
