import {Icon} from '@component'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './AddLeagueButton.scss'

type AddLeagueButtonProps = DivCommonProps

export const AddLeagueButton: FC<AddLeagueButtonProps> = ({...props}) => {
  return (
    <div className={`AddLeagueButton_Wrapper`} {...props}>
      <Icon className={`AddLeagueButton `} iconName="playlist_add" />
    </div>
  )
}
