import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {Model} from 'mongoose'
import { GameInfo, LeagueInfo } from './recordDB.entity'

import * as DTO from '@dtoType'
import * as OT from '@objectTye'

@Injectable()
export class RecordDBService {
  constructor(
    @InjectModel(GameInfo.name) private gameInfoModel: Model<GameInfo>,
    @InjectModel(GameInfo.name) private leagueInfoModel: Model<LeagueInfo>,
  ) {}

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

  async createLeagueInfo(where: string, dto: DTO.DTO_CreateLeagueInfo) {
    where = where + '/createLeagueInfo'

    const {description, leagueNum} = dto

    try {
      const newLeagueInfo = new this.leagueInfoModel({description, leagueNum})
      await newLeagueInfo.save()
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

      const gameArrDB = await this.gameInfoModel.find({...findFilter}).sort({gameNum: -1})

      if (!gameArrDB) {
        return {gameArr: []}
      }

      const gameArr = gameArrDB.map(elem => {
        const {enemyTeam, gameNum, leagueNum, SPName} = elem
        const ret: OT.GameInfoType = {enemyTeam, gameNum, leagueNum, SPName}
        return ret
      })

      return {gameArr}
      // ::
    } catch (errObj) {
      // ::
      throw errObj
    }

  }

  async readLeagueInfoArr(where: string) {
    where = where + '/readLeagueInfoArr'

    try {
      const leagueArrDB = await this.leagueInfoModel.find().sort({leagueNum: -1})

      if (!leagueArrDB) {
        return {leagueArr: []}
      }

      const leagueArr: OT.LeagueInfoType[] = leagueArrDB.map(leagueInfo => {
        const ret: OT.LeagueInfoType = {
          createdAt: leagueInfo.createdAt,
          description: leagueInfo.description,
          leagueNum: leagueInfo.leagueNum
        }
        return ret
      })

      return {leagueArr}
      // ::
    } catch (errObj) {
      // ::
      throw errObj
    }
  }
}
