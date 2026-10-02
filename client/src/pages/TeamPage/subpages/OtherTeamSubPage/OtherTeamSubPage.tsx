import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './OtherTeamSubPage.scss'

type OtherTeamSubPageProps = DivCommonProps & {
  teamIdx: number
}

export const OtherTeamSubPage: FC<OtherTeamSubPageProps> = ({teamIdx, ...props}) => {
  return (
    <div className={`OtherTeamSubPage`} {...props}>
      OtherTeamSubPage.tsx
    </div>
  )
}
