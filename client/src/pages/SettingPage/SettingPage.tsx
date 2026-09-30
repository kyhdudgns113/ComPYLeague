import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './SettingPage.scss'

type SettingPageProps = DivCommonProps

export const SettingPage: FC<SettingPageProps> = ({...props}) => {
  return (
    <div className={`SettingPage`} {...props}>
      SettingPage.tsx
    </div>
  )
}
