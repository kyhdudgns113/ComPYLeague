import {useCallback, useState} from 'react'
import {useModalActions} from '@redux'
import {usePitcherCallbacksContext, usePitcherStatesContext} from '@context'

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
  const {setCPArr, setRPArr, setSPArr} = usePitcherStatesContext()
  const {addPitcher} = usePitcherCallbacksContext()

  const [pitcherName, setPitcherName] = useState<string>('')

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()

    setPitcherName(e.currentTarget.value)
  }, [])

  const onClickSubmit = useCallback(
    (name: string, pitcherType: CT.Type_Pitcher, teamName: CT.Type_Team) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      addPitcher(name, pitcherType, teamName).then(res => {
        const {isSuccess} = res

        if (isSuccess) {
          const {pitcherArr} = res

          switch (pitcherType) {
            case '선발':
              setSPArr(pitcherArr)
              break
            case '중계':
              setRPArr(pitcherArr)
              break
            case '마무리':
              setCPArr(pitcherArr)
              break
          }

          alert(`${pitcherType}투수 등록이 완료되었어요!`)
          closeModal()
        } // ::
        else {
          alert(`[AddPitcherModal] 배열이 잘못 들어온것 같아요 ㅠㅠ`)
        }
      })
    },
    []
  )

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
        <button className="buttonSubmit_Modal" onClick={onClickSubmit(pitcherName, pitcherType, V.MY_TEAM_NAME)}>
          추가
        </button>
        <button className="buttonCancle_Modal" onClick={closeModal}>
          취소
        </button>
      </div>
    </C.Modal>
  )
}
