import {useCallback} from 'react'
import {Outlet} from 'react-router-dom'

import {useModalStates, useRecordStates} from '@redux'

import {Footer} from './Footer'
import {Header} from './Header'
import {Lefter} from './Lefter'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import * as M from './Modals'

import './Template.scss'

type TemplateProps = DivCommonProps

export const Template: FC<TemplateProps> = ({...props}) => {
  const {modalBatterClass, modalBatterTeamIdx, modalLeagueNum, modalPitcherType, modalType} = useModalStates()
  const {gameArr} = useRecordStates()

  const onClickTemplate = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    // 템플릿 클릭시 이벤트 작성
  }, [])

  return (
    <div className={`Template `} onClick={onClickTemplate} {...props}>
      {/* 1. 헤더 */}
      <Header />

      {/* 2. 몸통 */}
      <div className="body_Template">
        <Lefter />
        <div className="pageArea_Template">
          <Outlet />
        </div>
      </div>

      <Footer />

      {/* 3. 모달 영역 */}
      {modalType === 'AddGame' && modalLeagueNum !== null && <M.AddGameModal arrLen={gameArr.length} leagueNum={modalLeagueNum} />}
      {modalType === 'AddBatter' && modalBatterClass !== null && modalBatterTeamIdx !== null && (
        <M.AddBatterModal batterClass={modalBatterClass} teamIdx={modalBatterTeamIdx} />
      )}
      {modalType === 'AddLeague' && <M.AddLeagueModal />}
      {modalType === 'AddPitcher' && modalPitcherType !== null && <M.AddPitcherModal pitcherType={modalPitcherType} />}
    </div>
  )
}
