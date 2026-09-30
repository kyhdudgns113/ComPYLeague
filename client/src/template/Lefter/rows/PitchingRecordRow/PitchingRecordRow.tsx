import {useCallback, useEffect, useState} from 'react'

import {useLefterActions, useSelectLefterType} from '@redux'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './PitchingRecordRow.scss'

type PitchingRecordRowProps = DivCommonProps

export const PitchingRecordRow: FC<PitchingRecordRowProps> = ({...props}) => {
  const tabType = useSelectLefterType()
  const {setLefterTabPitchRecord} = useLefterActions()

  const [isSelected, setIsSelected] = useState<boolean>(false)

  // 클릭 이벤트
  const onClickRow = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    setLefterTabPitchRecord()
  }, [])

  // 자동갱신 : 현재 탭 선택여부 갱신
  useEffect(() => {
    if (tabType === 'PitchRecord') {
      setIsSelected(true)
    } // ::
    else {
      setIsSelected(false)
    }
  }, [tabType])

  return (
    <div className={`PitchingRecordRow ${isSelected && '_bold'}`} onClick={onClickRow} {...props}>
      PitchingRecordRow.tsx
    </div>
  )
}
