import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'
import {BatterInfo} from './batterDB.entity'
import {Model} from 'mongoose'

@Injectable()
export class BatterDBService {
  constructor(@InjectModel(BatterInfo.name) private batterInfoModel: Model<BatterInfo>) {}

}
