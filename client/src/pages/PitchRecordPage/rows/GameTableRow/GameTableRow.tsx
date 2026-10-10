import type {FC} from 'react'
import type {TableRowCommonProps} from '@prop'

import './GameTableRow.scss'

type GameTableRowProps = TableRowCommonProps

export const GameTableRow: FC<GameTableRowProps> = ({...props}) => {
  return (
    <tr className={`GameTableRow`} {...props}>
      GameTableRow.tsx
    </tr>
  )
}
