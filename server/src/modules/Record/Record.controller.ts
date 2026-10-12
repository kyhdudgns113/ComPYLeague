import {Body, Controller, Get, Headers, Param, Post} from '@nestjs/common'
import {RecordService} from './Record.service'

import * as HTTP from '@httpType'

@Controller('/record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Post('/addGame')
  async addGame(@Param() data: HTTP.HTTP_AddGame) {
    const {ok, body, gkdErrMsg, statusCode} = await this.recordService.addGame(data)
    return {ok, body, gkdErrMsg, statusCode}
  }
}
