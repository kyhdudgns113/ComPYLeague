import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import { GameInfo } from './recordDB.entity'

import * as DTO from '@dtoType'
import * as OT from '@objectTye'

@Injectable()
export class RecordDBService {
  constructor(@InjectModel(GameInfo.name) private gameInfoModel: Model<GameInfo>) {}

  async createGameInfo(where: string, dto: DTO.DTO_CreateGameInfo) {
    where = where + '/createGameInfo'

    const {enemyTeam, gameNum, leagueNum, SPName} = dto

    try {
      const newGameInfo = new this.gameInfoModel({enemyTeam, gameNum, leagueNum, SPName})
      
      await newGameInfo.save()
      // ::
    } catch (errObj) {
      // ::
      throw errObj
    }
  }

  async readGameInfoArr(where: string, dto: DTO.DTO_ReadGameInfoArr) {
    where = where + '/readGameInfoArr'

    const findFilter: {[key: string]: any} = {}

    try {
      // 검색조건 들어온것들 입력
      if (dto.enemyTeam) {
        findFilter.enemyTeam = dto.enemyTeam
      }

      if (dto.gameNum) {
        findFilter.gameNum = dto.gameNum
      }

      if (dto.leagueNum) {
        findFilter.leagueNum = dto.leagueNum
      }

      if (dto.SPName) {
        findFilter.SPName = dto.SPName
      }

      const gameInfoArr = (await this.gameInfoModel.find({...findFilter}).sort({gameNum: -1})).map(elem => {
        const {enemyTeam, gameNum, leagueNum, SPName} = elem
        const ret: OT.GameInfoType = {enemyTeam, gameNum, leagueNum, SPName}
        return ret
      })

      return {gameInfoArr}
      // ::
    } catch (errObj) {
      // ::
      throw errObj
    }

  }
}
