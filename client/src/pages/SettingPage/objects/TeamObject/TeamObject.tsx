import {TEAM_NAME} from '@value'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './TeamObject.scss'

type TeamObjectProps = DivCommonProps & {
  teamIdx: number
}

export const TeamObject: FC<TeamObjectProps> = ({teamIdx, ...props}) => {
  return (
    <div className={`TeamObject team_${teamIdx}`} {...props}>
      <p className="_teamName">{TEAM_NAME[teamIdx] || '[에러]'}</p>
    </div>
  )
}
