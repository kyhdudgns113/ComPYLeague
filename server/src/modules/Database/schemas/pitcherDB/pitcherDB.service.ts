import {Model, Types} from 'mongoose'
import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'

import {PitcherArr, PitcherInfo, PitcherRecord} from './pitcherDB.entity'

import * as CT from '@commonType'
import * as DTO from '@dtoType'
import * as OT from '@objectTye'

@Injectable()
export class PitcherDBService {
  constructor(
    @InjectModel(PitcherArr.name) private pitcherArrModel: Model<PitcherArr>,
    @InjectModel(PitcherInfo.name) private pitcherInfoModel: Model<PitcherInfo>,
    @InjectModel(PitcherRecord.name) private pitcherRecordModel: Model<PitcherRecord>

  ) {}

  async createPitcherInfo(where: string, data: DTO.DTO_CreatePitcher) {
    where = where + '/createPitcherInfo'

    const {name, teamName} = data

    try {
      // 1. 새로운 투수 DB 에 저장
      const newPitcher = new this.pitcherInfoModel({name, teamName})
      const pitcherDB = await newPitcher.save()
      const pitcherOId = pitcherDB._id.toString()

      // 2. 리턴할 투수 정보 생성
      const pitcher: OT.PitcherType = {
        name, pitcherOId, teamName
      }

      // 3. 팀의 투수 배열에 추가
      await this.pitcherArrModel.findOneAndUpdate(
        {teamName}, 
        {$push: {pitcherOIdArr: pitcherOId}},
        {new: true}
      )

      // 4. 리턴
      return {pitcher}
      // ::
    } catch (err) {
      // ::
      throw err
    }
  }

  async deletePitcher(where: string, pitcherOId: string) {
    where = where + '/deletePitcher'

    try {
      const _id = new Types.ObjectId(pitcherOId)
      const pitcherDB = await this.pitcherInfoModel.findOne({_id})
      if (!pitcherDB) {
        return
      }
      
      const {teamName} = pitcherDB

      await this.pitcherInfoModel.deleteOne({_id})
      await this.pitcherRecordModel.deleteMany({pitcherOId})
      await this.pitcherArrModel.updateOne({teamName}, {$pull: {pitcherOIdArr: pitcherOId}})
      // ::
    } catch (err) {
      // ::
      throw err
    }
  }

  async readPitcherInfoArr(where: string, teamName: CT.Type_Team) {
    where = where + '/readPitcherInfoArr'

    try {
      const pitcherArrDB = await this.pitcherArrModel.findOne({teamName})

      if (!pitcherArrDB) {
        return {pitcherArr: []}
      }

      const {pitcherOIdArr} = pitcherArrDB

      const pitcherInfoArr = await this.pitcherInfoModel.find({teamName})

      if (!pitcherInfoArr) {
        return {pitcherArr: []}
      }

      const pitcherArr = pitcherOIdArr.map(pitcherOId => {
        return pitcherInfoArr.find(elem => elem._id.toString() === pitcherOId)
      })

      return {pitcherArr}
      // ::
    } catch (err) {
      // ::
      throw err
    }
  }

  async updatePitcherArr(where: string, dto: DTO.DTO_UpdatePitcherArr) {
    where = where + '/updatePitcherArr'

    const {pitcherOIdArr, teamName} = dto

    try {
      await this.pitcherArrModel.updateOne({teamName}, {$set: {pitcherOIdArr}})
      // ::
    } catch (err) {
      // ::
      throw err
    }
  }
}
