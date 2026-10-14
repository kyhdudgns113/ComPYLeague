import type {FC} from 'react'
import type {TableRowCommonProps} from '@prop'

import './GameRow.scss'

type GameRowProps = TableRowCommonProps

export const GameRow: FC<GameRowProps> = ({...props}) => {
  return (
    <tr className={`GameRow`} {...props}>
      GameRow.tsx
    </tr>
  )
}
