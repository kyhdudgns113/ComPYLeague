import {useRecordStates} from '@redux'

import type {FC} from 'react'
import type {TableCommonProps} from '@prop'

import './GameListTable.scss'

import * as R from '../../rows'

type GameListTableProps = TableCommonProps

export const GameListTable: FC<GameListTableProps> = ({...props}) => {
  const {gameArr} = useRecordStates()

  return (
    <table className={`GameListTable`} {...props}>
      <thead>
        <tr>
          <th className="th_number">{'#'}</th>
          <th className="th_teamName">상대</th>
          <th className="th_pitcherName">선발 투수</th>
          <th className="th_button">O</th>
        </tr>
      </thead>
      <tbody>
        {gameArr.map((gameRow, gameIdx) => {
          return <R.GameRow gameRow={gameRow} key={gameIdx} />
        })}
      </tbody>
    </table>
  )
}
