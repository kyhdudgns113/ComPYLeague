import {Body, Controller, Get, Headers, Param, Post} from '@nestjs/common'
import {RecordService} from './Record.service'

import * as HTTP from '@httpType'

@Controller('/record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Post('/addGame')
  async addGame(@Body() data: HTTP.HTTP_AddGame) {
    const {ok, body, gkdErrMsg, statusCode} = await this.recordService.addGame(data)
    return {ok, body, gkdErrMsg, statusCode}
  }

  @Get(`/readGameArr/:leagueNum`)
  async readGameArr(@Param('leagueNum') leagueNum: number) {
    const {ok, body, gkdErrMsg, statusCode} = await this.recordService.readGameArr(leagueNum)
    return {ok, body, gkdErrMsg, statusCode}
  }
}
