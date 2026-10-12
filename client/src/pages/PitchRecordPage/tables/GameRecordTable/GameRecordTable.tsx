import type {FC} from 'react'
import type {TableCommonProps} from '@prop'

import './GameRecordTable.scss'

type GameRecordTableProps = TableCommonProps

export const GameRecordTable: FC<GameRecordTableProps> = ({...props}) => {
  return (
    <div>
      {/* 1. 타이틀 */}
      <p>타이틀</p>

      {/* 2. 테이블 */}
      <table className={`GameRecordTable`} {...props}>
        <thead>
          <tr>
            <th className="th_number">{'#'}</th>
            <th className="th_name">이름</th>
            <th className="th_class">손</th>
            <th className="th_pressure">위</th>
            <th className="th_pitch">투구</th>
            <th className="th_result">결과</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="td_number">1</td>
            <td className="td_name">데스파이네'93</td>
            <td className="td_class">좌</td>
            <td className="td_pressure">O</td>
            <td className="td_pitch">O</td>
            <td className="td_result">2</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
