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
      <td className="td_gameNum">{gameRow.gameNum}</td>
      <td className="td_enemyTeam">{gameRow.enemyTeam}</td>
      <td className="td_SPName">{gameRow.SPName}</td>
      <td className="td_V">{`V`}</td>
    </tr>
  )
}
