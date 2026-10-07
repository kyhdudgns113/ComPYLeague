import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import * as CT from '@commonType'

import './PitcherListPart.scss'

type PitcherListPartProps = DivCommonProps & {
  pitcherType: CT.Type_Pitcher
}

export const PitcherListPart: FC<PitcherListPartProps> = ({pitcherType, ...props}) => {
  return (
    <div className={`PitcherListPart`} {...props}>
      {/* 1. 타이틀 */}
      <p className="title_Part">{`${pitcherType} 투수`}</p>

      {/* 2. 투수 목록 */}

      {/* 3. 추가 버튼 */}
    </div>
  )
}
