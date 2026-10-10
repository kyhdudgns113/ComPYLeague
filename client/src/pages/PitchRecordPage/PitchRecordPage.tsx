import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import * as BTN from './buttons'
import * as TB from './tables'

import './PitchRecordPage.scss'

type PitchRecordPageProps = DivCommonProps

export const PitchRecordPage: FC<PitchRecordPageProps> = ({...props}) => {
  return (
    <div className={`PitchRecordPage`} {...props}>
      {/* 1. 타이틀 */}
      <p className="title_Page">게임 기록 페이지</p>

      {/* 2. 몸통 */}
      <div className="body_Page">
        {/* 2-1. 게임 리스트 */}
        <div className="gameList_Page">
          {/* 2-1-1. 게임 추가 버튼 */}
          <BTN.AddGameButton />

          {/* 2-1-2. 테이블 */}
          <TB.GameListTable />
        </div>

        {/* 2-2. 기록 페이지 */}
        <div className="gameRecord_Page">
          <TB.GameRecordTable />
        </div>
      </div>
    </div>
  )
}
