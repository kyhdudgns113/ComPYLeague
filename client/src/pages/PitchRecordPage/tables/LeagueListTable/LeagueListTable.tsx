import {useRecordStates} from '@redux'

import type {FC} from 'react'
import type {TableCommonProps} from '@prop'

import './LeagueListTable.scss'

type LeagueListTableProps = TableCommonProps

export const LeagueListTable: FC<LeagueListTableProps> = ({...props}) => {
  const {leagueArr} = useRecordStates()

  return (
    <table className={`LeagueListTable`} {...props}>
      <thead>
        <tr>
          <th>리그 번호</th>
        </tr>
      </thead>
      <tbody>
        {leagueArr.map((league, leagueIdx) => {
          return <tr key={leagueIdx}>{`리그 번호: ${league}`}</tr>
        })}
      </tbody>
    </table>
  )
}
