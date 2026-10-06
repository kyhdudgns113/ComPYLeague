import {Injectable} from '@nestjs/common'

import * as CT from '@commonType'
import { PitcherDBService } from '../Database'

@Injectable()
export class SettingService {
  constructor(private readonly pitcherDBService: PitcherDBService) {}


  async readTeamPitcherArr(teamName: CT.Type_Team) {
    const where = '/setting/readTeamPitcherArr'
    try {
      const {pitcherArr} = await this.pitcherDBService.readPitcherInfoArr(where, teamName)
      return {ok: true, body: {pitcherArr}, errObj: {}}

    } catch (errObj) {
      // ::
      return {ok: false, body: {}, errObj}
    }
  }
}
