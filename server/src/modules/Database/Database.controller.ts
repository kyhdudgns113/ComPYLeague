import {Body, Controller, Get, Headers, Param, Post} from '@nestjs/common'
import {DatabaseService} from './Database.service'

@Controller('copyMe')
export class DatabaseController {
  constructor(private readonly DatabaseService: DatabaseService) {}

  @Get('/copyGet/:testArg')
  async copyGet(@Headers() headers: any, @Param('testArg') testArg: any) {
    const {jwtFromHeader} = headers
    const {ok, body, errObj} = await this.DatabaseService.copyMeGet(testArg)
    return {ok, body, errObj, jwtFromHeader}
  }
}
