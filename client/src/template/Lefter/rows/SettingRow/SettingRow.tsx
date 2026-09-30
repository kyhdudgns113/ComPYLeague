import {useCallback} from 'react'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './SettingRow.scss'

type SettingRowProps = DivCommonProps

export const SettingRow: FC<SettingRowProps> = ({...props}) => {
  return (
    <div className={`SettingRow`} {...props}>
      SettingRow.tsx
    </div>
  )
}
