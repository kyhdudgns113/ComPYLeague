import {Fragment, useEffect, useState} from 'react'

import type {FC} from 'react'
import type {TableCommonProps} from '@prop'

import * as V from '@value'

import './GameRecordTable.scss'
import {useRecordStates} from '@redux'

type GameRecordTableProps = TableCommonProps

export const GameRecordTable: FC<GameRecordTableProps> = ({...props}) => {
  const {gameNum} = useRecordStates()

  const [isHidden, setIsHidden] = useState<boolean>(false)

  const ORDER_CNT = V.SETTING_ORDER_CNT

  useEffect(() => {
    if (gameNum === null) {
      setIsHidden(true)
    } // ::
    else {
      setIsHidden(false)
    }
  }, [gameNum])

  return (
    <table className={`GameRecordTable`} {...props}>
      <thead>
        <tr>
          <th className={`th_order`}>{'#'}</th>
          <th className={`th_name`}>이름</th>
          <th className={`th_hand`}>손</th>
          <th className={`th_pressure`}>위</th>

          {Array.from({length: ORDER_CNT}, () => null).map((_null, idx) => {
            return (
              <Fragment key={idx}>
                <th className={`th_pitch`}>투구</th>
                <th className={`th_result`}>결</th>
              </Fragment>
            )
          })}
        </tr>
      </thead>

      <tbody hidden={isHidden}>
        <tr>
          <td className={`td_order`}>1</td>
          <td className={`td_name`}>데스파이네'93</td>
          <td className={`td_hand`}>좌</td>
          <td className={`td_pressure`}>O</td>
        </tr>
      </tbody>
    </table>
  )
}
