import * as P from './parts'
import * as V from '@value'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './MyTeamSubPage.scss'

type MyTeamSubPageProps = DivCommonProps & {teamIdx: number}

export const MyTeamSubPage: FC<MyTeamSubPageProps> = ({teamIdx, ...props}) => {
  return (
    <div className={`MyTeamSubPage`} {...props}>
      {/* 1. 타이틀 */}
      <p className="title_SubPage">{`우리팀(${V.MY_TEAM_NAME}) 라인업`}</p>

      {/* 2. 몸통 행 */}
      <div className="blocksRow_SubPage">
        <P.PitcherListPart pitcherType="선발" />
        <P.PitcherListPart pitcherType="중계" />
        <P.PitcherListPart pitcherType="마무리" />
      </div>
    </div>
  )
}
