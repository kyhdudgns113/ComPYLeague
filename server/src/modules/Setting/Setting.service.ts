import {Injectable} from '@nestjs/common'

import {BatterDBService, PitcherDBService} from '../Database'

import * as CT from '@commonType'
import * as DTO from '@dtoType'
import * as HTTP from '@httpType'
import * as U from '@util'

@Injectable()
export class SettingService {
  constructor(
    private readonly batterDBService: BatterDBService,
    private readonly pitcherDBService: PitcherDBService
  ) {}

  // GET AREA:
  async readTeamBatterArr(teamName: CT.Type_Team) {
    const where = '/setting/readTeamBatterArr'
    try {
      const {batterArr: mainBatterArr} = await this.batterDBService.readBatterInfoArr(where, teamName, "선발")
      const {batterArr: subBatterArr} = await this.batterDBService.readBatterInfoArr(where, teamName, "후보")
      
      return {ok: true, body: {mainBatterArr, subBatterArr}, gkdErrMsg: '', statusCode: 200}
      // ::
    } catch (errObj) {
      // ::
      return U.getFailResponse(errObj)
    }
  }

  async readTeamPitcherArr(teamName: CT.Type_Team) {
    const where = '/setting/readTeamPitcherArr'
    try {
      const {pitcherArr: SPArr} = await this.pitcherDBService.readPitcherInfoArr(where, '선발', teamName)
      const {pitcherArr: RPArr} = await this.pitcherDBService.readPitcherInfoArr(where, '중계', teamName)
      const {pitcherArr: CPArr} = await this.pitcherDBService.readPitcherInfoArr(where, '마무리', teamName)
      return {ok: true, body: {SPArr, RPArr, CPArr}, gkdErrMsg: '', statusCode: 200}
      // ::
    } catch (errObj) {
      // ::
      return U.getFailResponse(errObj)
    }
  }

  // POST AREA:
  async addBatter(data: HTTP.HTTP_AddBatter) {
    const where = '/setting/addBatter'
    const {batterClass, batterHand, batterNum, hasPressureSkill, name, teamName} = data

    try {
      const dto: DTO.DTO_CreateBatter = {batterClass, batterHand, batterNum, hasPressureSkill, name, teamName}
      await this.batterDBService.createBatter(where, dto)

      const {batterArr: mainBatterArr} = await this.batterDBService.readBatterInfoArr(where, teamName, "선발")
      const {batterArr: subBatterArr} = await this.batterDBService.readBatterInfoArr(where, teamName, "후보")

      return {ok: true, body: {mainBatterArr, subBatterArr}, gkdErrMsg: '', statusCode: 200}
      // ::
    } catch (errObj) {
      // ::
      return U.getFailResponse(errObj)
    }
  }
  
  async addPitcher(data: HTTP.HTTP_AddPitcher) {
    const where = '/setting/addPitcher'
    const {name, pitcherType, teamName} = data

    try {
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

  // PUT AREA:
  async movePitcherInArr(data: HTTP.HTTP_MovePitcherInArr) {
    const where = '/setting/movePitcherInArr'
    try {
      const {pitcherOId, pitcherType, targetIdx, targetPitcherType, teamName} = data

      if (pitcherType === targetPitcherType) {
        // 1-1. 투수 배열 불러오기
        const {pitcherArr: prevArr} = await this.pitcherDBService.readPitcherInfoArr(where, pitcherType, teamName)
        
        // 1-2. 이동할 투수 가져오기
        const pitcher = prevArr.find(pitcher => pitcher.pitcherOId === pitcherOId)
        if (!pitcher) {
          throw {gkdErrMsg: `[movePitcherInArr] ${pitcherOId} 투수가 DB 에 없어요`}
        }

        // 1-3. 배열에서 투수 위치 조정
        const newArr = prevArr.filter(pitcher => pitcher.pitcherOId !== pitcherOId)
        newArr.splice(targetIdx, 0, pitcher)

        // 1-4. DB 에 반영
        const dto: DTO.DTO_UpdatePitcherArr = {
          pitcherOIdArr: newArr.map(pitcher => pitcher.pitcherOId),
          pitcherType,
          teamName,
        }
        await this.pitcherDBService.updatePitcherArr(where, dto)

        // 1-5. 갱신 이후 투수 배열들 불러오기
        const {pitcherArr: CPArr} = await this.pitcherDBService.readPitcherInfoArr(where, "마무리", teamName)
        const {pitcherArr: RPArr} = await this.pitcherDBService.readPitcherInfoArr(where, "중계", teamName)
        const {pitcherArr: SPArr} = await this.pitcherDBService.readPitcherInfoArr(where, "선발", teamName)

        // 1-6. 리턴
        return {ok: true, body: {CPArr, RPArr, SPArr}, gkdErrMsg: '', statusCode: 200}
      } // ::
      else {
        // 2-1. 투수 배열들 불러오기
        const {pitcherArr: prevArr} = await this.pitcherDBService.readPitcherInfoArr(where, pitcherType, teamName)
        const {pitcherArr: nextArr} = await this.pitcherDBService.readPitcherInfoArr(where, targetPitcherType, teamName)

        // 2-2. 이동할 투수 가져오기
        const pitcher = prevArr.find(pitcher => pitcher.pitcherOId === pitcherOId)
        if (!pitcher) {
          throw {gkdErrMsg: `[movePitcherInArr] ${pitcherOId} 투수가 DB 에 없어요!!`}
        }

        // 2-3. 배열에서 투수 제거 및 추가
        const newPrevArr = prevArr.filter(pitcher => pitcher.pitcherOId !== pitcherOId)
        const newNextArr = nextArr.splice(targetIdx, 0, pitcher)

        // 2-4. DB 에 반영
        const dtoPrev: DTO.DTO_UpdatePitcherArr = {
          pitcherOIdArr: newPrevArr.map(pitcher => pitcher.pitcherOId),
          pitcherType,
          teamName
        }
        const dtoNext: DTO.DTO_UpdatePitcherArr = {
          pitcherOIdArr: newNextArr.map(pitcher => pitcher.pitcherOId),
          pitcherType: targetPitcherType,
          teamName
        }
        await this.pitcherDBService.updatePitcherArr(where, dtoPrev)
        await this.pitcherDBService.updatePitcherArr(where, dtoNext)

        // 2-5. 갱신 이후 투수 배열들 불러오기
        const {pitcherArr: CPArr} = await this.pitcherDBService.readPitcherInfoArr(where, "마무리", teamName)
        const {pitcherArr: RPArr} = await this.pitcherDBService.readPitcherInfoArr(where, "중계", teamName)
        const {pitcherArr: SPArr} = await this.pitcherDBService.readPitcherInfoArr(where, "선발", teamName)

        // 2-6. 리턴
        return {ok: true, body: {CPArr, RPArr, SPArr}, gkdErrMsg: '', statusCode: 200}
      }
    } catch (errObj) {
      // ::
      return U.getFailResponse(errObj)
    }
  }
}
