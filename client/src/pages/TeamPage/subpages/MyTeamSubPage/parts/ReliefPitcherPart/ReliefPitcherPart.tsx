import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './ReliefPitcherPart.scss'

type ReliefPitcherPartProps = DivCommonProps

export const ReliefPitcherPart: FC<ReliefPitcherPartProps> = ({...props}) => {
  return (
    <div className={`ReliefPitcherPart`} {...props}>
      {/* 1. 타이틀 */}
      <p className="title_Part">중계 투수</p>

      {/* 2. 투수 목록 */}
    </div>
  )
}
