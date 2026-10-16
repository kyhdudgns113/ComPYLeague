import {Injectable} from '@nestjs/common'

import { RecordDBService } from '../Database'

import * as DTO from '@dtoType'
import * as HTTP from '@httpType'
import * as U from '@util'

@Injectable()
export class RecordService {
  constructor(private readonly recordDBService: RecordDBService) {}

  async addGame(data: HTTP.HTTP_AddGame) {
    const where = '/record/addGame'
    const {arrLen, leagueNum, SPName, teamName} = data

    try {
      const createDTO: DTO.DTO_CreateGameInfo = {
        gameNum: arrLen+1, leagueNum, SPName, enemyTeam: teamName
      }
      await this.recordDBService.createGameInfo(where, createDTO)

      const readDTO: DTO.DTO_ReadGameInfoArr = {
        leagueNum
      }
      const {gameInfoArr: gameArr} = await this.recordDBService.readGameInfoArr(where, readDTO)
      
      return {ok: true, body: {gameArr}, gkdErrMsg: '', statusCode: 200}
      // ::
    } catch (errObj) {
      // ::
      return U.getFailResponse(errObj)
    }
  }

  async readGameArr(leagueNum: number) {
    const where = '/record/readGameArr'
    
    try {
      const readDTO: DTO.DTO_ReadGameInfoArr = {
        leagueNum
      }
      const {gameInfoArr: gameArr} = await this.recordDBService.readGameInfoArr(where, readDTO)
      
      return {ok: true, body: {gameArr}, gkdErrMsg: '', statusCode: 200}
      // ::
    } catch (errObj) {
      // ::
      return U.getFailResponse(errObj)
    }
  }
}
