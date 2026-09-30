import {useCallback, useEffect, useState} from 'react'

import {useLefterActions, useSelectLefterType} from '@redux'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './SettingRow.scss'

type SettingRowProps = DivCommonProps

export const SettingRow: FC<SettingRowProps> = ({...props}) => {
  const tabType = useSelectLefterType()
  const {setLefterTabSetting} = useLefterActions()

  const [isSelected, setIsSelected] = useState<boolean>(false)

  const onClickRow = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    setLefterTabSetting()
  }, [])

  // 자동갱신 : 현재 탭 선택여부 갱신
  useEffect(() => {
    if (tabType === 'Setting') {
      setIsSelected(true)
    } // ::
    else {
      setIsSelected(false)
    }
  }, [tabType])

  return (
    <div className={`SettingRow ${isSelected && '_bold'}`} onClick={onClickRow} {...props}>
      SettingRow.tsx
    </div>
  )
}
