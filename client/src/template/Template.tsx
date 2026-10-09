import {useCallback} from 'react'
import {Outlet} from 'react-router-dom'

import {useModalStates} from '@redux'

import {Footer} from './Footer'
import {Header} from './Header'
import {Lefter} from './Lefter'

import * as M from './Modals'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './Template.scss'

type TemplateProps = DivCommonProps

export const Template: FC<TemplateProps> = ({...props}) => {
  const {modalType, modalPitcherType, modalBatterClass, modalBatterTeam} = useModalStates()

  const onClickTemplate = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
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
      {modalType === 'AddPitcher' && modalPitcherType !== null && <M.AddPitcherModal pitcherType={modalPitcherType} />}
      {modalType === 'AddBatter' && modalBatterClass !== null && modalBatterTeam !== null && (
        <M.AddBatterModal batterClass={modalBatterClass} teamName={modalBatterTeam} />
      )}
    </div>
  )
}
