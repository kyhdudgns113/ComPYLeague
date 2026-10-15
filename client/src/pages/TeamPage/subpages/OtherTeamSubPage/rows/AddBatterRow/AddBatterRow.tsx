import {useCallback} from 'react'

import {useModalActions} from '@redux'

import type {FC} from 'react'
import type {TableRowCommonProps} from '@prop'

import * as C from '@component'
import * as CT from '@commonType'

// 테이블 스타일 은 상위 컴포넌트인 OtherTeamSubPage.scss 에 있다
import './AddBatterRow.scss'

type AddBatterRowProps = TableRowCommonProps & {
  batterClass: CT.Type_BatterClass
  teamIdx: number
}

export const AddBatterRow: FC<AddBatterRowProps> = ({batterClass, teamIdx, ...props}) => {
  const {openAddBatterModal} = useModalActions()

  const onClickIcon = useCallback(
    (batterClass: CT.Type_BatterClass, teamIdx: number) => (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation()

      openAddBatterModal(batterClass, teamIdx)
    },
    []
  )

  return (
    <tr className={`AddBatterRow`} {...props}>
      <td colSpan={4}>
        <C.Icon className="addIcon_Row" iconName="add" onClick={onClickIcon(batterClass, teamIdx)} />
      </td>
    </tr>
  )
}
