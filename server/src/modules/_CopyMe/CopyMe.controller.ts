import {Body, Controller, Get, Headers, Param, Post} from '@nestjs/common'
import {CopyMeService} from './CopyMe.service'

@Controller('copyMe')
export class CopyMeController {
  constructor(private readonly copyMeService: CopyMeService) {}

  @Get('/copyGet/:testArg')
  async copyGet(@Headers() headers: any, @Param('testArg') testArg: any) {
    const {jwtFromHeader} = headers
    const {ok, body, errObj} = await this.copyMeService.copyMeGet(testArg)
    return {ok, body, errObj, jwtFromHeader}
  }
}
