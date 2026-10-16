import {useCallback, useState} from 'react'
import {useModalActions, usePitcherSPArr, useRecordActions} from '@redux'

import * as C from '@component'
import * as OT from '@objectType'
import * as V from '@value'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './AddGameModal.scss'
import {useRecordCallbacksContext} from '@context'

type AddGameModalProps = DivCommonProps & {
  arrLen: number
  leagueNum: number
}

export const AddGameModal: FC<AddGameModalProps> = ({arrLen, leagueNum, ...props}) => {
  const {closeModal} = useModalActions()
  const {setGameArr} = useRecordActions()

  const {addGame} = useRecordCallbacksContext()

  const SPArr = usePitcherSPArr(V.MY_TEAM_IDX)

  const [SPName, setSPName] = useState<string>('')
  const [teamIdx, setTeamIdx] = useState<number | null>(null)

  const _submit = useCallback((arrLen: number, leagueNum: number, SPName: string, teamIdx: number | null) => {
    if (SPName.length === 0 || SPName.split(' ').length === 0) {
      alert('선발투수 이름을 입력해주세요')
      return
    }
    if (teamIdx === null) {
      alert('팀이 선택되지 않았어요')
      return
    }
    if (teamIdx === V.MY_TEAM_IDX) {
      alert('내 팀이랑 상대할 순 없어요')
      return
    }

    addGame(arrLen, leagueNum, SPName, V.TEAM_NAME[teamIdx]).then(res => {
      const {isSuccess} = res

      if (isSuccess) {
        const {gameArr} = res
        setGameArr(gameArr)
        closeModal()
      } // ::
      else {
        const {errMsg} = res
        alert(`[AddGameModal] ${errMsg}`)
      }
    })
  }, [])

  const onClickModal = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()

    setSPName('')
    setTeamIdx(null)
  }, [])

  const onClickPitcher = useCallback(
    (pitcher: OT.PitcherType) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()

      setSPName(pitcher.name)
    },
    []
  )

  const onClickSubmit = useCallback(
    (arrLen: number, leagueNum: number, SPName: string, teamIdx: number | null) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation()

      _submit(arrLen, leagueNum, SPName, teamIdx)
    },
    []
  )

  const onClickTeam = useCallback(
    (teamIdx: number) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()

      setTeamIdx(teamIdx)
    },
    []
  )

  const onKeyDown = useCallback(
    (arrLen: number, leagueNum: number, SPName: string, teamIdx: number | null) => (e: React.KeyboardEvent<HTMLDivElement>) => {
      switch (e.key) {
        case 'Enter':
          e.stopPropagation()
          _submit(arrLen, leagueNum, SPName, teamIdx)
          break
        case 'Escape':
          e.stopPropagation()
          closeModal()
          break
      }
    },
    []
  )

  return (
    <C.Modal
      className="AddGameModal"
      onClick={onClickModal}
      onClose={closeModal}
      onKeyDown={onKeyDown(arrLen, leagueNum, SPName, teamIdx)}
      {...props}
    >
      {/* 1. 타이틀 */}
      <p className="title_Modal">{`${arrLen} 번째 게임 추가`}</p>

      {/* 2. 입력행: 이름 */}
      <div className="inputRow_Modal inputRow_name">
        {SPArr.map((pitcher, pitcherIdx) => {
          return (
            <div className={`pitcherBlock_Modal ${SPName === pitcher.name && '_selected'}`} key={pitcherIdx} onClick={onClickPitcher(pitcher)}>
              {pitcher.name}
            </div>
          )
        })}
      </div>

      {/* 3. 입력행: 팀 1 */}
      <div className="inputRow_Modal inputRow_team">
        <div className={`buttonWrapper team_KT ${teamIdx === V.TEAM_KT && '_selected'}`} onClick={onClickTeam(V.TEAM_KT)}>
          KT
        </div>
        <div className={`buttonWrapper team_KIA ${teamIdx === V.TEAM_KIA && '_selected'}`} onClick={onClickTeam(V.TEAM_KIA)}>
          기아
        </div>
        <div className={`buttonWrapper team_Samsung ${teamIdx === V.TEAM_SAMSUNG && '_selected'}`} onClick={onClickTeam(V.TEAM_SAMSUNG)}>
          삼성
        </div>
        <div className={`buttonWrapper team_Doosan ${teamIdx === V.TEAM_DOOSAN && '_selected'}`} onClick={onClickTeam(V.TEAM_DOOSAN)}>
          두산
        </div>
        <div className={`buttonWrapper team_SSG ${teamIdx === V.TEAM_SSG && '_selected'}`} onClick={onClickTeam(V.TEAM_SSG)}>
          SSG
        </div>
      </div>

      {/* 4. 입력행: 팀 2 */}
      <div className="inputRow_Modal inputRow_team">
        <div className={`buttonWrapper team_LG ${teamIdx === V.TEAM_LG && '_selected'}`} onClick={onClickTeam(V.TEAM_LG)}>
          LG
        </div>
        <div className={`buttonWrapper team_Lotte ${teamIdx === V.TEAM_LOTTE && '_selected'}`} onClick={onClickTeam(V.TEAM_LOTTE)}>
          롯데
        </div>
        <div className={`buttonWrapper team_Hanhwa ${teamIdx === V.TEAM_HANHWA && '_selected'}`} onClick={onClickTeam(V.TEAM_HANHWA)}>
          한화
        </div>
        <div className={`buttonWrapper team_NC ${teamIdx === V.TEAM_NC && '_selected'}`} onClick={onClickTeam(V.TEAM_NC)}>
          NC
        </div>
        <div className={`buttonWrapper team_Kiwoon ${teamIdx === V.TEAM_KIWOOM && '_selected'}`} onClick={onClickTeam(V.TEAM_KIWOOM)}>
          키움
        </div>
      </div>

      {/* 5. 버튼 행 */}
      <div className="buttonRow_Modal">
        <button className="buttonSubmit_Modal" onClick={onClickSubmit(arrLen, leagueNum, SPName, teamIdx)}>
          추가
        </button>
        <button className="buttonCancle_Modal" onClick={closeModal}>
          취소
        </button>
      </div>
    </C.Modal>
  )
}
