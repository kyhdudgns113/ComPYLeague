import {useCallback} from 'react'

import {useLefterActions} from '@redux'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import {PitchingRecordRow, SettingRow} from './rows'

import './Lefter.scss'

type LefterProps = DivCommonProps

export const Lefter: FC<LefterProps> = ({...props}) => {
  const {setLefterTabNull} = useLefterActions()

  const onClickLefter = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    setLefterTabNull()
  }, [])

  return (
    <div className={`Lefter`} onClick={onClickLefter} {...props}>
      <SettingRow />
      <PitchingRecordRow />
    </div>
  )
}
