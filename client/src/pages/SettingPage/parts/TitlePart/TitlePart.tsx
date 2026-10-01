import type {FC} from 'react'
import type {TextCommonProps} from '@prop'

import './TitlePart.scss'

type TitlePartProps = TextCommonProps

export const TitlePart: FC<TitlePartProps> = ({...props}) => {
  return (
    <p className={`TitlePart`} {...props}>
      구단별 설정
    </p>
  )
}
