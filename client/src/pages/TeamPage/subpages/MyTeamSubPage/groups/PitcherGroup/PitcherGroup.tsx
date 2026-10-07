import * as OT from '@objectType'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './PitcherGroup.scss'

type PitcherGroupProps = DivCommonProps & {
  pitcher: OT.PitcherType
}

export const PitcherGroup: FC<PitcherGroupProps> = ({pitcher, ...props}) => {
  return (
    <div className={`PitcherGroup`} {...props}>
      PitcherGroup.tsx
    </div>
  )
}
