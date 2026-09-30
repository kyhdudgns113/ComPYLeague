import {useCallback, useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import {useSelectLefterType} from '@redux'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './PitchRecordRow.scss'

type PitchRecordRowProps = DivCommonProps

export const PitchRecordRow: FC<PitchRecordRowProps> = ({...props}) => {
  const tabType = useSelectLefterType()

  const [isSelected, setIsSelected] = useState<boolean>(false)

  const navigate = useNavigate()

  // 클릭 이벤트
  const onClickRow = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()

      navigate('/main/pitchRecord')
    },
    [navigate]
  )

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
    <div className={`PitchRecordRow ${isSelected && '_bold'}`} onClick={onClickRow} {...props}>
      PitchRecordRow.tsx
    </div>
  )
}
