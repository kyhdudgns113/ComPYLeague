import {useCallback} from 'react'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import * as C from '@component'
import * as CT from '@commonType'

import './AddPitcherButton.scss'
import {useModalActions} from '@redux'

type AddPitcherButtonProps = DivCommonProps & {
  pitcherType: CT.Type_Pitcher
}

export const AddPitcherButton: FC<AddPitcherButtonProps> = ({pitcherType, ...props}) => {
  const {openAddPitcherModal} = useModalActions()

  const onClickAddButton = useCallback(
    (pitcherType: CT.Type_Pitcher) => (e: React.MouseEvent<HTMLSpanElement>) => {
      e.stopPropagation()

      openAddPitcherModal(pitcherType)
    },
    []
  )

  return (
    <div className={`AddPitcherButton`} {...props}>
      <C.Icon className="plusIcon_Button" iconName="add" onClick={onClickAddButton(pitcherType)} />
    </div>
  )
}
