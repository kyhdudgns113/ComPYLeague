import * as OT from '@objectType'

export const NULL_PITCHER_OBJ = (() => {
  const ret: OT.PitcherType = {
    name: '빈 이름',
    pitcherOId: '빈 OID',
    pitcherType: '선발',
    teamName: 'KT'
  }
  return ret
})()