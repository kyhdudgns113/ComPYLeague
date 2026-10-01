import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'

import {TEAM_NAME} from '@value'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './TeamObject.scss'

type TeamObjectProps = DivCommonProps & {
  teamIdx: number
}

export const TeamObject: FC<TeamObjectProps> = ({teamIdx, ...props}) => {
  const navigate = useNavigate()

  const onClickTeam = useCallback(
    (teamIdx: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()

      navigate(`/main/setting/${teamIdx}`)
    },
    [navigate]
  )

  return (
    <div
      className={`TeamObject team_${teamIdx}`}
      onClick={onClickTeam(teamIdx)}
      {...props} // ::
    >
      <p className="_teamName">{TEAM_NAME[teamIdx] || '[에러]'}</p>
    </div>
  )
}
