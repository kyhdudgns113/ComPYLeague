import {Model} from 'mongoose'
import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'

import {PitcherInfo} from './pitcherDB.entity'

import * as DTO from '@dtoType'
import * as OT from '@objectTye'

@Injectable()
export class PitcherDBService {
  constructor(@InjectModel(PitcherInfo.name) private pitcherModel: Model<PitcherInfo>) {}

  async createPitcherInfo(where: string, data: DTO.DTO_CreatePitcher) {
    where = where + '/createPitcherInfo'

    const {name, teamName} = data

    try {
      const newPitcher = new this.pitcherModel({name, teamName})
      const pitcherDB = await newPitcher.save()
      const pitcher: OT.PitcherType = {
        name: pitcherDB.name,
        pitcherOId: pitcherDB._id.toString(),
        teamName: pitcherDB.teamName
      }

      return {pitcher}
      // ::
    } catch (err) {
      // ::
      throw err
    }
  }
}
