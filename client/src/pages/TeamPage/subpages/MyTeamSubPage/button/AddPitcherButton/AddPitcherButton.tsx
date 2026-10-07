import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import * as CT from '@commonType'

import './AddPitcherButton.scss'

type AddPitcherButtonProps = DivCommonProps & {
  pitcherType: CT.Type_Pitcher
}

export const AddPitcherButton: FC<AddPitcherButtonProps> = ({pitcherType, ...props}) => {
  return (
    <div className={`AddPitcherButton`} {...props}>
      CopyMe.tsx
    </div>
  )
}
