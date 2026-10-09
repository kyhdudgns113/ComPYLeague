import {useCallback, useState} from 'react'
import {useModalActions} from '@redux'
import {useBatterCallbacksContext, useBatterStatesContext} from '@context'

import * as C from '@component'
import * as CT from '@commonType'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './AddBatterModal.scss'

type AddBatterModalProps = DivCommonProps & {
  batterClass: CT.Type_BatterClass
  teamName: CT.Type_Team
}

export const AddBatterModal: FC<AddBatterModalProps> = ({batterClass, teamName, ...props}) => {
  const {closeModal} = useModalActions()
  const {mainBatterArr, subBatterArr, setMainBatterArr, setSubBatterArr} = useBatterStatesContext()
  const {addBatter} = useBatterCallbacksContext()

  const [batterHand, setBatterHand] = useState<CT.Type_BatterHand>('우타')
  const [hasPressureSkill, setHasPressureSkill] = useState<boolean>(false)
  const [name, setName] = useState<string>('')

  const batterNum = batterClass === '선발' ? mainBatterArr.length : subBatterArr.length

  const _submit = useCallback(
    (
      batterClass: CT.Type_BatterClass,
      batterHand: CT.Type_BatterHand,
      batterNum: number,
      hasPressureSkill: boolean,
      name: string,
      teamName: CT.Type_Team
    ) => {
      if (!name || name.length === 0) {
        alert(`이름을 입력해주세요`)
        return
      }

      addBatter(batterClass, batterHand, batterNum, hasPressureSkill, name, teamName).then(res => {
        const {isSuccess} = res

        if (isSuccess) {
          const {mainBatterArr, subBatterArr} = res

          setMainBatterArr(mainBatterArr)
          setSubBatterArr(subBatterArr)
          alert(`${batterClass}타자 등록이 완료되었어요!`)
          closeModal()
        } // ::
        else {
          const {errMsg} = res
          alert(`[AddBatterModal] ${errMsg}`)
        }
      })
    },
    []
  )

  const onChangeName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation()

    setName(e.currentTarget.value)
  }, [])

  const onClickHand = useCallback(
    (batterHand: CT.Type_BatterHand) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()
      setBatterHand(batterHand)
    },
    []
  )

  const onClickPressure = useCallback(
    (isPressure: boolean) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()
      setHasPressureSkill(isPressure)
    },
    []
  )

  const onClickSubmit = useCallback(
    (
        batterClass: CT.Type_BatterClass,
        batterHand: CT.Type_BatterHand,
        batterNum: number,
        hasPressureSkill: boolean,
        name: string,
        teamName: CT.Type_Team
      ) =>
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        _submit(batterClass, batterHand, batterNum, hasPressureSkill, name, teamName)
      },
    []
  )

  const onKeyDown = useCallback(
    (
        batterClass: CT.Type_BatterClass,
        batterHand: CT.Type_BatterHand,
        batterNum: number,
        hasPressureSkill: boolean,
        name: string,
        teamName: CT.Type_Team
      ) =>
      (e: React.KeyboardEvent<HTMLDivElement>) => {
        const clicked = e.key

        switch (clicked) {
          case 'Enter':
            _submit(batterClass, batterHand, batterNum, hasPressureSkill, name, teamName)
            break
          case 'Escape':
            closeModal()
            break
          default:
            break
        }
      },
    []
  )

  return (
    <C.Modal
      className="AddBatterModal"
      onClose={closeModal}
      onKeyDown={onKeyDown(batterClass, batterHand, batterNum, hasPressureSkill, name, teamName)}
      {...props}
    >
      {/* 1. 타이틀 */}
      <p className="title_Modal">{`${batterClass}타자 추가`}</p>

      {/* 2. 입력행: 이름 */}
      <div className="inputRow_Modal inputRow_name">
        <p className="name_Modal">이름</p>
        <input className="inputName_Modal" autoFocus={true} onChange={onChangeName} value={name} />
      </div>

      {/* 3. 입력행: 손잡이 */}
      <div className="inputRow_hand">
        <div className={`buttonHand_Modal ${batterHand === '좌타' && '_bold'}`} onClick={onClickHand('좌타')}>
          좌타
        </div>
        <div className={`buttonHand_Modal ${batterHand === '우타' && '_bold'}`} onClick={onClickHand('우타')}>
          우타
        </div>
        <div className={`buttonHand_Modal ${batterHand === '양타' && '_bold'}`} onClick={onClickHand('양타')}>
          양타
        </div>
      </div>

      {/* 4. 입력행: 위압감 여부 */}
      <div className="inputRow_pressure">
        <div className={`buttonPress ${hasPressureSkill && '_bold'}`} onClick={onClickPressure(true)}>
          위압감 O
        </div>
        <div className={`buttonPress ${!hasPressureSkill && '_bold'}`} onClick={onClickPressure(false)}>
          위압감 X
        </div>
      </div>

      {/* 3. 버튼 행 */}
      <div className="buttonRow_Modal">
        <button className="buttonSubmit_Modal" onClick={onClickSubmit(batterClass, batterHand, batterNum, hasPressureSkill, name, teamName)}>
          추가
        </button>
        <button className="buttonCancle_Modal" onClick={closeModal}>
          취소
        </button>
      </div>
    </C.Modal>
  )
}
