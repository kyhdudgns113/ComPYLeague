import type {FC} from 'react'
import type {TableRowCommonProps} from '@prop'

import * as OT from '@objectType'

import './GameRow.scss'

type GameRowProps = TableRowCommonProps & {
  gameRow: OT.GameInfoType
}

export const GameRow: FC<GameRowProps> = ({gameRow, ...props}) => {
  return (
    <tr className={`GameRow`} {...props}>
      <td>{gameRow.gameNum}</td>
      <td>{gameRow.enemyTeam}</td>
      <td>{gameRow.SPName}</td>
      <td>{`V`}</td>
    </tr>
  )
}
