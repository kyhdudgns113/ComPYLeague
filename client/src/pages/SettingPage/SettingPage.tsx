import * as O from './objects'
import * as P from './parts'
import * as V from '@value'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './SettingPage.scss'

type SettingPageProps = DivCommonProps

export const SettingPage: FC<SettingPageProps> = ({...props}) => {
  return (
    <div className={`SettingPage`} {...props}>
      {/* 1. 타이틀 */}
      <P.TitlePart />

      {/* 2. 첫번째 구단 행 */}
      <div className="teamRow_Page row1">
        <O.TeamObject teamIdx={V.TEAM_KT} />
        <O.TeamObject teamIdx={V.TEAM_KIA} />
        <O.TeamObject teamIdx={V.TEAM_SAMSUNG} />
        <O.TeamObject teamIdx={V.TEAM_DOOSAN} />
        <O.TeamObject teamIdx={V.TEAM_SSG} />
      </div>

      {/* 3. 두번째 구단 행 */}
      <div className="teamRow_Page row2">
        <O.TeamObject teamIdx={V.TEAM_LG} />
        <O.TeamObject teamIdx={V.TEAM_LOTTE} />
        <O.TeamObject teamIdx={V.TEAM_HANHWA} />
        <O.TeamObject teamIdx={V.TEAM_NC} />
        <O.TeamObject teamIdx={V.TEAM_KIWOOM} />
      </div>
    </div>
  )
}
