import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './CloserPitcherPart.scss'

type CloserPitcherPartProps = DivCommonProps

export const CloserPitcherPart: FC<CloserPitcherPartProps> = ({...props}) => {
  return (
    <div className={`CloserPitcherPart`} {...props}>
      {/* 1. 타이틀 */}
      <p className="title_Part">마무리 투수</p>

      {/* 2. 투수 목록 */}
    </div>
  )
}
