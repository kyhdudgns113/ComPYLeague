import {Injectable} from '@nestjs/common'

@Injectable()
export class CopyMeService {
  constructor() {}

  async copyMeGet(testArg: any) {
    try {
      return {ok: true, body: {}, errObj: {}}
      // ::
    } catch (errObj) {
      // ::
      return {ok: false, body: {}, errObj}
    }
  }
}
