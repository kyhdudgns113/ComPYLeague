import {useCallback} from 'react'

import type {FC} from 'react'
import type {TableRowCommonProps} from '@prop'

import * as C from '@component'
import * as CT from '@commonType'

// 테이블 스타일 은 상위 컴포넌트인 OtherTeamSubPage.scss 에 있다
import './AddBatterRow.scss'
import {useModalActions} from '@redux'

type AddBatterRowProps = TableRowCommonProps & {
  batterClass: CT.Type_BatterClass
  teamName: CT.Type_Team
}

export const AddBatterRow: FC<AddBatterRowProps> = ({batterClass, teamName, ...props}) => {
  const {openAddBatterModal} = useModalActions()

  const onClickIcon = useCallback(
    (batterClass: CT.Type_BatterClass, teamName: CT.Type_Team) => (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation()

      openAddBatterModal(batterClass, teamName)
    },
    []
  )

  return (
    <tr className={`AddBatterRow`} {...props}>
      <td colSpan={4}>
        <C.Icon className="addIcon_Row" iconName="add" onClick={onClickIcon(batterClass, teamName)} />
      </td>
    </tr>
  )
}
