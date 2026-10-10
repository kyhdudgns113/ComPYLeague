import type {FC} from 'react'
import type {TableCommonProps} from '@prop'

import './GameListTable.scss'

type GameListTableProps = TableCommonProps

export const GameListTable: FC<GameListTableProps> = ({...props}) => {
  return (
    <table className={`GameListTable`} {...props}>
      <thead>
        <tr>
          <th className="th_number">번호</th>
          <th className="th_teamName">상대팀</th>
          <th className="th_pitcherName">선발 투수</th>
          <th className="th_button">O</th>
        </tr>
      </thead>
    </table>
  )
}
