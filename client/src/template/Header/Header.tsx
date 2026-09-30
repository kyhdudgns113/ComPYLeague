import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './Header.scss'

type HeaderProps = DivCommonProps

export const Header: FC<HeaderProps> = ({...props}) => {
  return (
    <div className={`Header`} {...props}>
      Header.tsx
    </div>
  )
}
