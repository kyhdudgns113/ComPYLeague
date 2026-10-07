import * as C from '@component'
import * as CT from '@commonType'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './AddPitcherModal.scss'
import {useModalActions} from '@redux'

type AddPitcherModalProps = DivCommonProps & {
  pitcherType: CT.Type_Pitcher
}

export const AddPitcherModal: FC<AddPitcherModalProps> = ({pitcherType, ...props}) => {
  const {closeModal} = useModalActions()

  return (
    <C.Modal onClose={closeModal} {...props}>
      <div>yes</div>
    </C.Modal>
  )
}
