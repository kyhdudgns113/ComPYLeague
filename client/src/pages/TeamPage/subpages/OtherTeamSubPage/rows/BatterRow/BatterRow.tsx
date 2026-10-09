import type {FC} from 'react'
import type {TableRowCommonProps} from '@prop'

import * as OT from '@objectType'

// style 은 상위 컴포넌트인 OtherTeamSubPage.scss 에 있다

type BatterRowProps = TableRowCommonProps & {
  batter: OT.BatterType
  batterIdx: number
}

export const BatterRow: FC<BatterRowProps> = ({batter, batterIdx, ...props}) => {
  return (
    <tr className={`BatterRow`} {...props}>
      <td>{batterIdx + 1}</td>
      <td>{batter.name}</td>
      <td>{batter.batterHand}</td>
      <td>{batter.hasPressureSkill ? 'O' : ' '}</td>
    </tr>
  )
}
