import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {PitcherInfo} from './pitcherDB.entity'
import {Model} from 'mongoose'

@Injectable()
export class PitcherDBService {
  constructor(@InjectModel(PitcherInfo.name) private ___copyModel: Model<PitcherInfo>) {}

  async copyMePost(copyData: any) {
    return 'CopyMe'
  }

  async copyMeGet() {
    return 'CopyMe'
  }

  async copyMeEtc() {
    return 'CopyMe'
  }
}
