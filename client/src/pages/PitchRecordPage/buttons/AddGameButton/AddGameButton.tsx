import type {FC} from 'react'
import type {SpanCommonProps} from '@prop'

import {Icon} from '@component'

import './AddGameButton.scss'

type AddGameButtonProps = SpanCommonProps

export const AddGameButton: FC<AddGameButtonProps> = ({...props}) => {
  return <Icon className="AddGameButton" iconName="playlist_add" {...props} />
}
