import {Injectable} from '@nestjs/common'

import { PitcherDBService } from '../Database'

import * as CT from '@commonType'
import * as U from '@util'

@Injectable()
export class SettingService {
  constructor(private readonly pitcherDBService: PitcherDBService) {}


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
}
