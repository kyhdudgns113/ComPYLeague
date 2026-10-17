import {Injectable} from '@nestjs/common'

import { RecordDBService } from '../Database'

import * as DTO from '@dtoType'
import * as HTTP from '@httpType'
import * as OT from '@objectTye'
import * as U from '@util'

@Injectable()
export class RecordService {
  constructor(private readonly recordDBService: RecordDBService) {}

  async addGame(data: HTTP.HTTP_AddGame) {
    const where = '/record/addGame'
    const {arrLen, leagueNum, SPName, teamName} = data

    try {
      const createDTO: DTO.DTO_CreateGameInfo = {
        gameNum: arrLen + 1, leagueNum, SPName, enemyTeam: teamName
      }
      await this.recordDBService.createGameInfo(where, createDTO)

      const readDTO: DTO.DTO_ReadGameInfoArr = {
        leagueNum
      }
      const {gameArr} = await this.recordDBService.readGameInfoArr(where, readDTO)
      
      return {ok: true, body: {gameArr}, gkdErrMsg: '', statusCode: 200}
      // ::
    } catch (errObj) {
      // ::
      return U.getFailResponse(errObj)
    }
  }

  async addLeague(data: HTTP.HTTP_AddLeague) {
    const where = '/record/addLeague'
    const {description, leagueNum} = data

    try {
      const createDTO: DTO.DTO_CreateLeagueInfo = {
        description, leagueNum
      }
      await this.recordDBService.createLeagueInfo(where, createDTO)

      const {leagueArr} = await this.recordDBService.readLeagueInfoArr(where)

      const gameMatrix: OT.GameInfoType[][] = Array.from({length: leagueArr.length + 1}, () => [])

      for (let i = 0; i < leagueArr.length; i++) {
        const leagueNum = leagueArr[i].leagueNum

        const readDTO: DTO.DTO_ReadGameInfoArr = {
          leagueNum
        }

        const {gameArr} = await this.recordDBService.readGameInfoArr(where, readDTO)
        gameMatrix[leagueNum] = gameArr
      }

      return {ok: true, body: {gameMatrix, leagueArr}, gkdErrMsg: '', statusCode: 200}
      // ::
    } catch (errObj) {
      // ::
      return U.getFailResponse(errObj)
    }
  }

  async readGameMatrix() {
    const where = '/record/readGameMatrix'
    
    try {
      // 전체를 불러온다
      const readDTO: DTO.DTO_ReadGameInfoArr = {}
      const {gameArr: entireGameArr} = await this.recordDBService.readGameInfoArr(where, readDTO)

      const gameMap: {[leagueNum: number]: OT.GameInfoType[]} = {}
      gameMap[0] = []

      let maxLeagueNum = 0

      entireGameArr.forEach((game, gameIdx) => {
        const {leagueNum} = game

        if (!gameMap[leagueNum]) {
          gameMap[leagueNum] = []
        }

        gameMap[leagueNum].push(game)

        maxLeagueNum = Math.max(maxLeagueNum,leagueNum)
      })

      const {leagueArr} = await this.recordDBService.readLeagueInfoArr(where)

      const gameMatrix = Object.keys(gameMap).map((leagueNum, idx) => {
        return gameMap[leagueNum]
      })
      
      return {ok: true, body: {gameMatrix, leagueArr}, gkdErrMsg: '', statusCode: 200}
      // ::
    } catch (errObj) {
      // ::
      return U.getFailResponse(errObj)
    }
  }
}
