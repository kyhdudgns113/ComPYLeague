import type {FC} from 'react'
import type {TableCommonProps} from '@prop'

// style 은 상위 컴포넌트인 OtherTeamSubPage.scss 에 있다

type SubTableProps = TableCommonProps

export const SubTable: FC<SubTableProps> = ({...props}) => {
  return (
    <div className={`SubTableWrapper`}>
      {/* 1. 타이틀 */}
      <p className="title_Table">후보 타자</p>

      {/* 2. 테이블 */}
      <table className={`SubTable`} {...props}>
        <thead>
          <tr>
            <th className="th_number">타순</th>
            <th className="th_name">이름</th>
            <th className="th_hand">좌우</th>
            <th className="th_pressure">위압감</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td_number">1</td>
            <td className="td_name">데스파이네'21</td>
            <td className="td_hand">좌타</td>
            <td className="td_pressurer">O</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
