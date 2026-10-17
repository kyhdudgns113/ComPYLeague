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

  @Post('/addLeague')
  async addLeague(@Body() data: HTTP.HTTP_AddLeague) {
    const {ok, body, gkdErrMsg, statusCode} = await this.recordService.addLeague(data)
    return {ok, body, gkdErrMsg, statusCode}
  }

  @Get(`/readGameMatrix`)
  async readGameMatrix() {
    const {ok, body, gkdErrMsg, statusCode} = await this.recordService.readGameMatrix()
    return {ok, body, gkdErrMsg, statusCode}
  }
}
