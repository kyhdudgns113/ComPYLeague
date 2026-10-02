import {useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'

import * as SP from './subpages'
import * as V from '@value'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './TeamPage.scss'

type TeamPageProps = DivCommonProps

export const TeamPage: FC<TeamPageProps> = ({...props}) => {
  const [teamIdx, setTeamIdx] = useState<number | null>(null)

  const navigate = useNavigate()
  const location = useLocation()

  // 자동 갱신: URL 파싱하여 팀 넘버 구하기
  useEffect(() => {
    const parseUrl = location.pathname.split('/main/setting/')

    if (parseUrl.length > 1) {
      const teamIdx = Number(parseUrl[1])

      if (Number.isNaN(teamIdx)) {
        setTeamIdx(V.MY_TEAM_IDX)
      } // ::
      else {
        setTeamIdx(teamIdx)
      }
    } // ::
    else {
      alert('잘못된 URL 이에요')
      navigate('/main/setting')
    }
  }, [location, navigate])

  // 팀 넘버 분석
  // 만약 팀 넘버가 이상하면 setting 페이지로 돌아가기
  useEffect(() => {
    if (teamIdx !== null && (teamIdx < 0 || teamIdx >= V.TEAM_IDX_ARR.length)) {
      alert('잘못된 팀 인덱스에요')
      navigate('/main/setting')
    }
  }, [teamIdx, navigate])

  return (
    <div
      className={`TeamPage teamIdx_${teamIdx}`}
      {...props} // ::
    >
      {teamIdx === V.MY_TEAM_IDX && <SP.MyTeamSubPage teamIdx={teamIdx} />}
      {teamIdx !== null && teamIdx !== V.MY_TEAM_IDX && <SP.OtherTeamSubPage teamIdx={teamIdx} />}
    </div>
  )
}
