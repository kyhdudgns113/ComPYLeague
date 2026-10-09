import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import * as TB from './tables'
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

      {/* 2. 테이블 행 */}
      <div className="tableRow_SubPage">
        <TB.MainTable teamName={V.TEAM_NAME[teamIdx]} />
        <TB.SubTable teamName={V.TEAM_NAME[teamIdx]} />
      </div>
    </div>
  )
}
