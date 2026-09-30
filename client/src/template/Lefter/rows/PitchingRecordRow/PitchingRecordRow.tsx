import {useCallback} from 'react'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './PitchingRecordRow.scss'

type PitchingRecordRowProps = DivCommonProps

export const PitchingRecordRow: FC<PitchingRecordRowProps> = ({...props}) => {
  return (
    <div className={`PitchingRecordRow`} {...props}>
      PitchingRecordRow.tsx
    </div>
  )
}
