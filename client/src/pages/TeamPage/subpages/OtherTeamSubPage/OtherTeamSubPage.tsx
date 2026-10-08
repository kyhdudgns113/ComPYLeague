import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import * as V from '@value'

import './OtherTeamSubPage.scss'

type OtherTeamSubPageProps = DivCommonProps & {
  teamIdx: number
}

export const OtherTeamSubPage: FC<OtherTeamSubPageProps> = ({teamIdx, ...props}) => {
  return (
    <div className={`OtherTeamSubPage`} {...props}>
      {/* 1. 타이틀 */}
      <p className="title_SubPage">{`상대팀(${V.TEAM_NAME[teamIdx]}) 라인업`}</p>

      {/* 2. 테이블 */}
      <table className="table_SubPage">
        <thead>
          <th className="th_number">타순</th>
          <th className="th_name">이름</th>
          <th className="th_hand">좌우</th>
          <th className="th_skill">스킬</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
