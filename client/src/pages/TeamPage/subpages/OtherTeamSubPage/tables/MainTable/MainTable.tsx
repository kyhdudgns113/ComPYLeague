import {useMainBatterArr} from '@redux'

import type {FC} from 'react'
import type {TableCommonProps} from '@prop'

import * as R from '../../rows'

// style 은 상위 컴포넌트인 OtherTeamSubPage.scss 에 있다

type MainTableProps = TableCommonProps & {
  teamIdx: number
}

export const MainTable: FC<MainTableProps> = ({teamIdx, ...props}) => {
  const mainBatterArr = useMainBatterArr(teamIdx)

  return (
    <div className={`MainTableWrapper`}>
      {/* 1. 타이틀 */}
      <p className="title_Table">선발 타자</p>

      {/* 2. 테이블 */}
      <table className={`MainTable`} {...props}>
        <thead>
          <tr>
            <th className="th_number">타순</th>
            <th className="th_name">이름</th>
            <th className="th_hand">좌우</th>
            <th className="th_pressure">위압감</th>
          </tr>
        </thead>
        <tbody>
          {/* 타자 정보 */}
          {mainBatterArr.map((batter, batterIdx) => {
            return <R.BatterRow batter={batter} batterIdx={batterIdx} key={batterIdx} />
          })}

          {/* 타자 추가 행 */}
          <R.AddBatterRow batterClass="선발" teamIdx={teamIdx} />
        </tbody>
      </table>
    </div>
  )
}
