import {useCallback, useState} from 'react'
import {useModalActions, useRecordActions, useRecordStates} from '@redux'
import {useRecordCallbacksContext} from '@context'

import * as C from '@component'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './AddLeagueModal.scss'

type AddLeagueModalProps = DivCommonProps

export const AddLeagueModal: FC<AddLeagueModalProps> = ({...props}) => {
  const {closeModal} = useModalActions()
  const {leagueArr} = useRecordStates()
  const {setGameMatrix, setLeagueArr} = useRecordActions()
  const {addLeague} = useRecordCallbacksContext()

  const [description, setDescription] = useState<string>('')

  const leagueNum = leagueArr.length > 0 ? leagueArr[leagueArr.length - 1].leagueNum + 1 : 1

  const _submit = useCallback((description: string, leagueNum: number) => {
    addLeague(description, leagueNum).then(res => {
      const {isSuccess} = res

      if (isSuccess) {
        const {gameMatrix, leagueArr} = res

        setGameMatrix(gameMatrix)
        setLeagueArr(leagueArr)
        closeModal()
      } // ::
      else {
        alert(res.errMsg)
      }
    })
  }, [])

  const onChangeDescription = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()

    setDescription(e.currentTarget.value)
  }, [])

  const onClickSubmit = useCallback(
    (description: string, leagueNum: number) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()

      _submit(description, leagueNum)
    },
    []
  )

  const onKeyDown = useCallback(
    (description: string, leagueNum: number) => (e: React.KeyboardEvent<HTMLDivElement>) => {
      e.stopPropagation()

      switch (e.key) {
        case 'Enter':
          _submit(description, leagueNum)
          break
        case 'Escape':
          closeModal()
      }
    },
    []
  )

  return (
    <C.Modal className="AddPitcherModal" onClose={closeModal} onKeyDown={onKeyDown(description, leagueNum)} {...props}>
      {/* 1. 타이틀 */}
      <p className="title_Modal">{`${leagueNum}번째 리그 추가`}</p>

      {/* 2. 입력행: 설명 */}
      <div className="inputRow_Modal inputRow_name">
        <p>설명</p>
        <input autoFocus onChange={onChangeDescription} tabIndex={0} value={description} />
      </div>

      {/* 3. 버튼 행 */}
      <div className="buttonRow_Modal">
        <button className="buttonSubmit_Modal" onClick={onClickSubmit(description, leagueNum)}>
          추가
        </button>
        <button className="buttonCancle_Modal" onClick={closeModal}>
          취소
        </button>
      </div>
    </C.Modal>
  )
}
