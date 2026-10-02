import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './StartPitcherPart.scss'

type StartPitcherPartProps = DivCommonProps

export const StartPitcherPart: FC<StartPitcherPartProps> = ({...props}) => {
  return (
    <div className={`StartPitcherPart`} {...props}>
      {/* 1. 타이틀 */}
      <p className="title_Part">선발 투수</p>

      {/* 2. 투수 목록 */}
    </div>
  )
}
