import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'

import {useRecordStates} from '@redux'

import type {FC} from 'react'
import type {TableCommonProps} from '@prop'

import './LeagueListTable.scss'

type LeagueListTableProps = TableCommonProps

export const LeagueListTable: FC<LeagueListTableProps> = ({...props}) => {
  const {leagueArr} = useRecordStates()

  const navigate = useNavigate()

  const onClickNum = useCallback(
    (leagueNum: number) => (e: React.MouseEvent<HTMLTableCellElement>) => {
      e.stopPropagation()

      navigate(`${leagueNum}`)
    },
    []
  )

  return (
    <table className={`LeagueListTable`} {...props}>
      <thead>
        <tr>
          <th className="leagueNum">리그 번호</th>
          <th className="createdAt">생성일</th>
          <th className="description">설명</th>
        </tr>
      </thead>
      <tbody>
        {leagueArr.map((league, leagueIdx) => {
          const date = new Date(league.createdAtNum)
          return (
            <tr key={leagueIdx}>
              <td className="leagueNum" onClick={onClickNum(league.leagueNum)}>
                {league.leagueNum}
              </td>
              <td className="createdAt">{date.toLocaleString()}</td>
              <td className="description">{league.description}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
