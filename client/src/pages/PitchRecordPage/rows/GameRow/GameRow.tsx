import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'

import type {FC} from 'react'
import type {TableRowCommonProps} from '@prop'

import * as OT from '@objectType'

import './GameRow.scss'

type GameRowProps = TableRowCommonProps & {
  gameRow: OT.GameInfoType
}

export const GameRow: FC<GameRowProps> = ({gameRow, ...props}) => {
  const navigate = useNavigate()

  const onClickV = useCallback(
    (gameRow: OT.GameInfoType) => (e: React.MouseEvent<HTMLTableCellElement>) => {
      e.stopPropagation()
      navigate(`${gameRow.gameNum}`)
    },
    []
  )

  return (
    <tr className={`GameRow`} {...props}>
      <td className="td_gameNum">{gameRow.gameNum}</td>
      <td className="td_enemyTeam">{gameRow.enemyTeam}</td>
      <td className="td_SPName">{gameRow.SPName}</td>
      <td className="td_V" onClick={onClickV(gameRow)}>{`V`}</td>
    </tr>
  )
}
