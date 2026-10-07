import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './CopyMe.scss'

type AddPitcherButtonProps = DivCommonProps

export const AddPitcherButton: FC<AddPitcherButtonProps> = ({...props}) => {
  return (
    <div className={`AddPitcherButton`} {...props}>
      CopyMe.tsx
    </div>
  )
}
