import {useCallback} from 'react'

import {useModalActions, useRecordStates} from '@redux'

import type {FC} from 'react'
import type {SpanCommonProps} from '@prop'

import {Icon} from '@component'

import './AddGameButton.scss'

type AddGameButtonProps = SpanCommonProps

export const AddGameButton: FC<AddGameButtonProps> = ({...props}) => {
  const {openAddGameModal} = useModalActions()
  const {leagueNum} = useRecordStates()

  const onClickIcon = useCallback(
    (leagueNum: number | null) => (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation()
      alert('yes')

      if (leagueNum === null) {
        alert(`[AddGameButton] leagueNum 이 null 이에요`)
        return
      }
      openAddGameModal(leagueNum)
    },
    []
  )

  return <Icon className="AddGameButton" iconName="playlist_add" onClick={onClickIcon(leagueNum)} {...props} />
}
