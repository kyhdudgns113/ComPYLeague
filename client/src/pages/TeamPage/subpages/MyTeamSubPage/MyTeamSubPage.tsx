import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './MyTeamSubPage.scss'

type MyTeamSubPageProps = DivCommonProps

export const MyTeamSubPage: FC<MyTeamSubPageProps> = ({...props}) => {
  return (
    <div className={`MyTeamSubPage`} {...props}>
      MyTeamSubPage.tsx
    </div>
  )
}
