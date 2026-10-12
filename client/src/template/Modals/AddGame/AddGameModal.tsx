import {useCallback, useState} from 'react'
import {useModalActions} from '@redux'

import * as C from '@component'
// import * as CT from '@commonType'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './AddGameModal.scss'

type AddGameModalProps = DivCommonProps & {
  arrLen: number
  leagueNum: number
}

export const AddGameModal: FC<AddGameModalProps> = ({arrLen, leagueNum, ...props}) => {
  const {closeModal} = useModalActions()

  const [SPName, setSPName] = useState<string>('')

  const onChangeSPName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()

    setSPName(e.currentTarget.value)
  }, [])

  return (
    <C.Modal className="AddGameModal" onClose={closeModal} {...props}>
      {/* 1. 타이틀 */}
      <p className="title_Modal">{`${arrLen}번째 게임 추가`}</p>

      {/* 2. 입력행: 이름 */}
      <div className="inputRow_Modal inputRow_name">
        <p className="SPname_Modal">선발 투수</p>
        <input className="inputSPName_Modal" autoFocus={true} onChange={onChangeSPName} value={SPName} />
      </div>

      {/* 3. 버튼 행 */}
      <div className="buttonRow_Modal">
        <button className="buttonSubmit_Modal">추가</button>
        <button className="buttonCancle_Modal" onClick={closeModal}>
          취소
        </button>
      </div>
    </C.Modal>
  )
}
