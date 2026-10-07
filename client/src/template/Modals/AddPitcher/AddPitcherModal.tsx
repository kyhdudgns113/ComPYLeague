import {useCallback, useState} from 'react'
import {useModalActions} from '@redux'

import * as C from '@component'
import * as CT from '@commonType'
import * as V from '@value'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './AddPitcherModal.scss'

type AddPitcherModalProps = DivCommonProps & {
  pitcherType: CT.Type_Pitcher
}

export const AddPitcherModal: FC<AddPitcherModalProps> = ({pitcherType, ...props}) => {
  const {closeModal} = useModalActions()

  const [pitcherName, setPitcherName] = useState<string>('')

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()

    setPitcherName(e.currentTarget.value)
  }, [])

  return (
    <C.Modal className="AddPitcherModal" onClose={closeModal} {...props}>
      {/* 1. 타이틀 */}
      <p className="title_Modal">{`${pitcherType}투수 추가`}</p>

      {/* 2. 입력행: 이름 */}
      <div className="inputRow_Modal inputRow_name">
        <p>이름</p>
        <input onChange={onChangeName} value={pitcherName} />
      </div>

      {/* 3. 버튼 행 */}
      <div className="buttonRow_Modal">
        <button className="buttonSubmit_Modal">추가</button>
        <button className="buttonCancle_Modal">취소</button>
      </div>
    </C.Modal>
  )
}
