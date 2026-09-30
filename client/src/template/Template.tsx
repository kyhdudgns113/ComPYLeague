import {useCallback} from 'react'
import {Outlet} from 'react-router-dom'

import {Footer} from './Footer'
import {Header} from './Header'
import {Lefter} from './Lefter'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './Template.scss'

type TemplateProps = DivCommonProps

export const Template: FC<TemplateProps> = ({...props}) => {
  const onClickTemplate = useCallback(() => {
    // 템플릿 클릭시 이벤트 작성
  }, [])

  return (
    <div className={`Template `} onClick={onClickTemplate} {...props}>
      {/* 1. 헤더 */}
      <Header />

      {/* 2. 몸통 */}
      <div className="Body_Template">
        <Lefter />
        <div className="PageArea_Template">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  )
}
