import type {FC} from 'react'
import type {SpanCommonProps} from '@prop'

export type IconProps = SpanCommonProps & {
  iconName: string
}

export const Icon: FC<IconProps> = ({iconName, className, ...props}) => {
  return (
    <span className={`material-symbols-outlined  ${className || ''}`} {...props}>
      {iconName}
    </span>
  )
}
