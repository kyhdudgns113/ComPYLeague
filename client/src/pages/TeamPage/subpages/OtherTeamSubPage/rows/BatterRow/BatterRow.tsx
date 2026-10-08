import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './BatterRow.scss'

type BatterRowProps = DivCommonProps

export const BatterRow: FC<BatterRowProps> = ({...props}) => {
  return (
    <div className={`BatterRow`} {...props}>
      BatterRow.tsx
    </div>
  )
}
