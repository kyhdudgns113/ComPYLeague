import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './OtherTeamSubPage.scss'

type OtherTeamSubPageProps = DivCommonProps

export const OtherTeamSubPage: FC<OtherTeamSubPageProps> = ({...props}) => {
  return (
    <div className={`OtherTeamSubPage`} {...props}>
      OtherTeamSubPage.tsx
    </div>
  )
}
