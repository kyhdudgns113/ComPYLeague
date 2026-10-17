import {useCallback} from 'react'

import {Icon} from '@component'

import type {FC} from 'react'
import type {DivCommonProps} from '@prop'

import './AddLeagueButton.scss'
import {useModalActions} from '@redux'

type AddLeagueButtonProps = DivCommonProps

export const AddLeagueButton: FC<AddLeagueButtonProps> = ({...props}) => {
  const {openAddLeagueModal} = useModalActions()

  const onClickIcon = useCallback((e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()

    openAddLeagueModal()
  }, [])

  return (
    <div className={`AddLeagueButton_Wrapper`} {...props}>
      <Icon className={`AddLeagueButton `} iconName="playlist_add" onClick={onClickIcon} />
    </div>
  )
}
