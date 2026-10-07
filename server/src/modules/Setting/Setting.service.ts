import {Injectable} from '@nestjs/common'

import { PitcherDBService } from '../Database'

import * as CT from '@commonType'
import * as DTO from '@dtoType'
import * as HTTP from '@httpType'
import * as U from '@util'

@Injectable()
export class SettingService {
  constructor(private readonly pitcherDBService: PitcherDBService) {}

  // GET AREA:
  async readTeamPitcherArr(teamName: CT.Type_Team) {
    const where = '/setting/readTeamPitcherArr'
    try {
      const {pitcherArr: SPArr} = await this.pitcherDBService.readPitcherInfoArr(where, "선발", teamName)
      const {pitcherArr: RPArr} = await this.pitcherDBService.readPitcherInfoArr(where, "중계", teamName)
      const {pitcherArr: CPArr} = await this.pitcherDBService.readPitcherInfoArr(where, "마무리", teamName)
      return {ok: true, body: {SPArr, RPArr, CPArr}, gkdErrMsg: '', statusCode: 200}

    } catch (errObj) {
      // ::
      return U.getFailResponse(errObj)
    }
  }

  // POST AREA:
  async addPitcher(data: HTTP.HTTP_AddPitcher) {
    const where = '/setting/addPitcher'
    try {
      const {name, pitcherType, teamName} = data
      const dto: DTO.DTO_CreatePitcher = {name, pitcherType, teamName}
      await this.pitcherDBService.createPitcherInfo(where, dto)

      const {pitcherArr} = await this.pitcherDBService.readPitcherInfoArr(where, pitcherType, teamName)
      return {ok: true, body: {pitcherArr}, gkdErrMsg: '', statusCode: 200}
      // ::
    } catch (errObj) {
      // ::
      return U.getFailResponse(errObj)
    }
  }
}
