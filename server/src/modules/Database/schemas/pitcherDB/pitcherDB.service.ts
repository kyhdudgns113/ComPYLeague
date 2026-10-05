import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {PitcherInfo} from './pitcherDB.entity'
import {Model} from 'mongoose'

@Injectable()
export class PitcherDBService {
  constructor(@InjectModel(PitcherInfo.name) private pitcherModel: Model<PitcherInfo>) {}

  async createPitcherInfo() {
    return 'yes'
  }
}
