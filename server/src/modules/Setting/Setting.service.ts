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
      const {pitcherArr} = await this.pitcherDBService.readPitcherInfoArr(where, teamName)
      return {ok: true, body: {pitcherArr}, gkdErrMsg: '', statusCode: 200}

    } catch (errObj) {
      // ::
      return U.getFailResponse(errObj)
    }
  }
}
