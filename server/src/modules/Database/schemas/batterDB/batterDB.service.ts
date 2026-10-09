import {Model, Types} from 'mongoose'
import {Injectable} from '@nestjs/common'
import {InjectModel} from '@nestjs/mongoose'

import {BatterArr, BatterInfo} from './batterDB.entity'

import * as CT from '@commonType'
import * as DTO from '@dtoType'
import * as OT from '@objectTye'

@Injectable()
export class BatterDBService {
  constructor(
    @InjectModel(BatterArr.name) private batterArrModel: Model<BatterArr>,
    @InjectModel(BatterInfo.name) private batterInfoModel: Model<BatterInfo>
  ) {}

  async createBatter(where: string, dto: DTO.DTO_CreateBatter) {
    where = where + '/createBatter'

    const {batterClass, batterHand, batterNum, hasPressureSkill, name, teamName} = dto

    try {
      // 1. 새로운 타자 DB 에 저장
      const newBatter = new this.batterInfoModel({batterClass, batterHand, batterNum, hasPressureSkill, name, teamName})
      const batterDB = await newBatter.save()
      const batterOId = batterDB._id.toString()

      // 2. 타자 오브젝트 생성
      const batter: OT.BatterType = {
        batterClass,
        batterHand,
        batterOId,
        hasPressureSkill,
        name,
        teamName
      }

      // 3. 타자 배열에 삽입
      await this.batterArrModel.findOneAndUpdate(
        {batterClass, teamName},
        {$push: {batterOIdArr: batterOId}},
        {upsert: true}
      )

      // 4. 리턴
      return {batter}
      // ::
    } catch (errObj) {
      // ::
      throw errObj
    }
  }

  async deleteBatter(where: string, batterOId: string) {
    where = where + '/deletebatter'

    try {
      const _id = new Types.ObjectId(batterOId)
      const batterDB = await this.batterInfoModel.findOne({_id})
      if (!batterDB) {
        return
      }

      const {batterClass, teamName} = batterDB

      await this.batterInfoModel.deleteOne({_id})
      await this.batterArrModel.updateOne({batterClass, teamName}, {$pull: {batterOIdArr: batterOId}})
      // ::
    } catch (err) {
      // ::
      throw err
    }
  }

  async readBatterInfoArr(where: string, teamName: CT.Type_Team, batterClass: CT.Type_BatterClass) {
    where = where + '/readBatterInfoArr'

    try {
      const batterArrDB = await this.batterArrModel.findOne({batterClass, teamName})

      if (!batterArrDB) {
        return {batterArr: []}
      }

      const {batterOIdArr} = batterArrDB

      const batterInfoArr = await this.batterInfoModel.find({batterClass, teamName})

      if (!batterInfoArr) {
        return {batterArr: []}
      }

      const batterArr = batterOIdArr.map(batterOId => {
        const batterDB = batterInfoArr.find(elem => elem._id.toString() === batterOId)

        if (batterDB) {
          const {name, teamName, _id, batterClass, batterHand, hasPressureSkill} = batterDB
          const batterOId = _id.toString()
          const ret: OT.BatterType = {
            name, batterOId, batterClass, batterHand, teamName, hasPressureSkill
          }
          return ret
        }
        else {
          return null
        }
      }).filter(elem => elem !== null)

      return {batterArr}
      // ::
    } catch (err) {
      // ::
      throw err
    }
  }

  async updateBatterArr(where: string, dto: DTO.DTO_UpdatebatterArr) {
    where = where + '/updatebatterArr'

    const {batterOIdArr, batterClass, teamName} = dto

    try {
      await this.batterArrModel.updateOne({teamName, batterClass}, {$set: {batterOIdArr}, $upsert: true})
      // ::
    } catch (err) {
      // ::
      throw err
    }
  }
}
