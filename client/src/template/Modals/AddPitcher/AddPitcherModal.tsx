import * as C from '@component'
import * as CT from '@commonType'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './AddPitcherModal.scss'

type AddPitcherModalProps = DivCommonProps & {
  pitcherType: CT.Type_Pitcher
}

export const AddPitcherModal: FC<AddPitcherModalProps> = ({pitcherType, ...props}) => {
  return (
    <C.Modal onClose={() => {}} {...props}>
      <div>yes</div>
    </C.Modal>
  )
}
