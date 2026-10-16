import {useCallback, useState} from 'react'
import {useModalActions, usePitcherActions} from '@redux'
import {usePitcherCallbacksContext} from '@context'

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
  const {setCPArr, setRPArr, setSPArr} = usePitcherActions()
  const {addPitcher} = usePitcherCallbacksContext()

  const [pitcherHand, setPitcherHand] = useState<CT.Type_PitcherHand | null>(null)
  const [pitcherName, setPitcherName] = useState<string>('')

  const teamName = V.MY_TEAM_NAME

  const _submit = useCallback((name: string, pitcherHand: CT.Type_PitcherHand | null, pitcherType: CT.Type_Pitcher, teamName: CT.Type_Team) => {
    if (!name) {
      alert(`투수 이름을 입력해주세요`)
      return
    }

    if (pitcherHand === null) {
      alert(`투수 손잡이를 설정해주세요`)
      return
    }

    addPitcher(name, pitcherHand, pitcherType, teamName).then(res => {
      const {isSuccess} = res

      if (isSuccess) {
        const {pitcherArr} = res

        switch (pitcherType) {
          case '선발':
            setSPArr(pitcherArr, V.MY_TEAM_IDX)
            break
          case '중계':
            setRPArr(pitcherArr, V.MY_TEAM_IDX)
            break
          case '마무리':
            setCPArr(pitcherArr, V.MY_TEAM_IDX)
            break
        }

        alert(`${pitcherType}투수 등록이 완료되었어요!`)
        closeModal()
      } // ::
      else {
        alert(`[AddPitcherModal] 배열이 잘못 들어온것 같아요 ㅠㅠ`)
      }
    })
  }, [])

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()

    setPitcherName(e.currentTarget.value)
  }, [])

  const onClickHand = useCallback(
    (hand: CT.Type_PitcherHand) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()

      setPitcherHand(hand)
    },
    []
  )

  const onClickModal = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setPitcherHand(null)
  }, [])

  const onClickSubmit = useCallback(
    (name: string, pitcherHand: CT.Type_PitcherHand | null, pitcherType: CT.Type_Pitcher, teamName: CT.Type_Team) =>
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()

        _submit(name, pitcherHand, pitcherType, teamName)
      },
    []
  )

  const onKeyDown = useCallback(
    (name: string, pitcherHand: CT.Type_PitcherHand | null, pitcherType: CT.Type_Pitcher, teamName: CT.Type_Team) =>
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        e.stopPropagation()

        switch (e.key) {
          case 'Enter':
            _submit(name, pitcherHand, pitcherType, teamName)
            break
          case 'Escape':
            closeModal()
        }
      },
    []
  )

  return (
    <C.Modal
      className="AddPitcherModal"
      onClick={onClickModal}
      onClose={closeModal}
      onKeyDown={onKeyDown(pitcherName, pitcherHand, pitcherType, teamName)}
      {...props}
    >
      {/* 1. 타이틀 */}
      <p className="title_Modal">{`${pitcherType}투수 추가`}</p>

      {/* 2. 입력행: 이름 */}
      <div className="inputRow_Modal inputRow_name">
        <p>이름</p>
        <input autoFocus onChange={onChangeName} tabIndex={0} value={pitcherName} />
      </div>

      {/* 3. 입력행: 투수 타입_완 */}
      <div className="inputRow_Modal inputRow_hand">
        <div className={`btn_hand ${pitcherHand === '좌완' && '_selected'}`} onClick={onClickHand('좌완')}>
          좌완
        </div>
        <div className={`btn_hand ${pitcherHand === '우완' && '_selected'}`} onClick={onClickHand('우완')}>
          우완
        </div>
      </div>

      {/* 3. 입력행: 투수 타입_사 */}
      <div className="inputRow_Modal inputRow_hand">
        <div className={`btn_hand ${pitcherHand === '좌사' && '_selected'}`} onClick={onClickHand('좌사')}>
          좌사
        </div>
        <div className={`btn_hand ${pitcherHand === '우사' && '_selected'}`} onClick={onClickHand('우사')}>
          우사
        </div>
      </div>

      {/* 3. 입력행: 투수 타입_언 */}
      <div className="inputRow_Modal inputRow_hand">
        <div className={`btn_hand ${pitcherHand === '좌언' && '_selected'}`} onClick={onClickHand('좌언')}>
          좌언
        </div>
        <div className={`btn_hand ${pitcherHand === '우언' && '_selected'}`} onClick={onClickHand('우언')}>
          우언
        </div>
      </div>

      {/* 3. 버튼 행 */}
      <div className="buttonRow_Modal">
        <button className="buttonSubmit_Modal" onClick={onClickSubmit(pitcherName, pitcherHand, pitcherType, teamName)}>
          추가
        </button>
        <button className="buttonCancle_Modal" onClick={closeModal}>
          취소
        </button>
      </div>
    </C.Modal>
  )
}
